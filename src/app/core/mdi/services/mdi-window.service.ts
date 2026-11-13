import { Injectable, signal, computed, effect } from '@angular/core';
import { Type } from '@angular/core';
import { DockPosition, MdiDockState, MdiWindow } from '../models/mdi-window.model';
import { getOrCreateForm } from '../mdi-registry';
import {
  WorkspaceRect,
  detectDockCandidate,
  getPositionOrientation,
  getOppositePosition,
  canAccommodateDock,
  calculateDockGeometries,
  getPreviewRect,
  clampWindowPosition,
} from './mdi-dock-utils';

export interface DockPreviewInfo {
  activeRect: { x: number; y: number; width: number; height: number };
  availableRect?: { x: number; y: number; width: number; height: number };
}

interface StoredWindowItem {
  id: string;
  title: string;
  formId?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
  active: boolean;
  dockedPosition?: DockPosition;
  restoreGeometry?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

interface StoredMdiSession {
  windows: StoredWindowItem[];
  dockState: MdiDockState | null;
  nextZIndex: number;
}

const STORAGE_KEY = 'erp_mdi_session';

@Injectable({ providedIn: 'root' })
export class MdiWindowService {
  private readonly windowsState = signal<MdiWindow[]>([]);
  readonly windows = this.windowsState.asReadonly();

  private readonly dockStateSignal = signal<MdiDockState | null>(null);
  readonly dockState = this.dockStateSignal.asReadonly();

  private readonly previewSignal = signal<DockPreviewInfo | null>(null);
  readonly dockPreview = this.previewSignal.asReadonly();

  private lastWorkspaceRect: WorkspaceRect = { width: 1200, height: 800 };

  readonly activeWindow = computed(() =>
    this.windowsState().find(w => w.active)
  );

  private nextZIndex = 100;
  private readonly DOCK_BASE_Z_INDEX = 10;
  private isRestoring = false;

  constructor() {
    this.restoreFromSession();
    effect(() => {
      this.syncToSession(this.windowsState(), this.dockStateSignal());
    });
  }

  setWorkspaceRect(rect: WorkspaceRect): void {
    if (rect.width <= 0 || rect.height <= 0) return;
    this.lastWorkspaceRect = rect;
    this.recalculateDockGeometries();
  }

  open(title: string, component: Type<unknown>, width = 760, height = 480, formId?: string): string {
    const existing = this.windowsState().find(w => w.title === title);
    if (existing) {
      if (existing.minimized) {
        this.restore(existing.id);
      } else {
        this.activate(existing.id);
      }
      return existing.id;
    }

    const id = crypto.randomUUID();
    const count = this.windowsState().length;
    const windowItem: MdiWindow = {
      id,
      title,
      component,
      formId,
      x: 30 + (count % 8) * 28,
      y: 30 + (count % 8) * 28,
      width,
      height,
      zIndex: ++this.nextZIndex,
      minimized: false,
      maximized: false,
      active: true
    };

    this.windowsState.update(windows => [
      ...windows.map(w => ({
        ...w,
        active: false,
        maximized: false,
        ...(w.maximized && w.restoreGeometry ? w.restoreGeometry : {})
      })),
      windowItem
    ]);

    return id;
  }

  activate(id: string): void {
    const isDocked = (w: MdiWindow) => !!w.dockedPosition;
    this.windowsState.update(windows =>
      windows.map(w => ({
        ...w,
        active: w.id === id && !w.minimized,
        maximized: w.id === id ? w.maximized : false,
        ...(w.id !== id && w.maximized && w.restoreGeometry ? w.restoreGeometry : {}),
        zIndex: w.id === id
          ? (isDocked(w) ? this.DOCK_BASE_Z_INDEX + 1 : ++this.nextZIndex)
          : (isDocked(w) ? this.DOCK_BASE_Z_INDEX : w.zIndex)
      }))
    );
  }

  close(id: string): void {
    this.handleWindowRemovalFromDock(id);
    this.windowsState.update(windows => windows.filter(w => w.id !== id));
    this.activateLast();
  }

  minimize(id: string): void {
    const dock = this.dockStateSignal();
    if (dock && (dock.firstWindowId === id || dock.secondWindowId === id)) {
      this.undockRemainingToFloating(id);
    }

    this.windowsState.update(windows =>
      windows.map(w => (w.id === id ? { ...w, minimized: true, active: false } : w))
    );
    this.activateLast();
  }

  restore(id: string): void {
    this.windowsState.update(windows =>
      windows.map(w => (w.id === id ? { ...w, minimized: false } : w))
    );
    this.activate(id);
  }

  maximize(id: string): void {
    const target = this.windowsState().find(w => w.id === id);
    if (!target) return;

    if (target.maximized) {
      this.restoreFromMaximize(target);
    } else {
      this.applyMaximize(target);
    }
    this.activate(id);
  }

  move(id: string, x: number, y: number): void {
    this.updateWindow(id, { x, y });
  }

  resize(id: string, width: number, height: number): void {
    this.updateWindow(id, { width, height });
  }

  cascade(): void {
    this.clearDocking();
    let offset = 20;
    this.windowsState.update(windows =>
      windows.map(w => {
        if (w.minimized) return w;
        const updated = {
          ...w,
          x: offset,
          y: offset,
          maximized: false,
          zIndex: ++this.nextZIndex
        };
        offset += 30;
        return updated;
      })
    );
  }

  tileHorizontal(containerWidth: number, containerHeight: number): void {
    this.clearDocking();
    const visible = this.windowsState().filter(w => !w.minimized);
    if (!visible.length) return;
    const itemHeight = Math.floor(containerHeight / visible.length);

    this.windowsState.update(windows =>
      windows.map(w => {
        if (w.minimized) return w;
        const index = visible.findIndex(v => v.id === w.id);
        return {
          ...w,
          x: 0,
          y: index * itemHeight,
          width: containerWidth,
          height: itemHeight,
          maximized: false
        };
      })
    );
  }

  tileVertical(containerWidth: number, containerHeight: number): void {
    this.clearDocking();
    const visible = this.windowsState().filter(w => !w.minimized);
    if (!visible.length) return;
    const itemWidth = Math.floor(containerWidth / visible.length);

    this.windowsState.update(windows =>
      windows.map(w => {
        if (w.minimized) return w;
        const index = visible.findIndex(v => v.id === w.id);
        return {
          ...w,
          x: index * itemWidth,
          y: 0,
          width: itemWidth,
          height: containerHeight,
          maximized: false
        };
      })
    );
  }

  onDragStart(id: string): void {
    const win = this.windowsState().find(w => w.id === id);
    if (!win || !win.dockedPosition) return;
    this.undockWindowOnDrag(win);
  }

  onDragMove(id: string, currentRect: { x: number; y: number; width: number; height: number }): void {
    const pos = detectDockCandidate(
      currentRect.x,
      currentRect.y,
      currentRect.width,
      currentRect.height,
      this.lastWorkspaceRect
    );

    if (!pos) {
      this.previewSignal.set(null);
      return;
    }

    const candidate = this.evaluateDockCandidate(id, pos);
    if (!candidate) {
      this.previewSignal.set(null);
      return;
    }

    const activeRect = getPreviewRect(pos, this.lastWorkspaceRect, 0.5);
    let availableRect: { x: number; y: number; width: number; height: number } | undefined;

    if (!this.dockStateSignal()) {
      const opp = getOppositePosition(pos);
      availableRect = getPreviewRect(opp, this.lastWorkspaceRect, 0.5);
    }

    this.previewSignal.set({ activeRect, availableRect });
  }

  onDragEnd(id: string, currentRect: { x: number; y: number; width: number; height: number }): void {
    this.previewSignal.set(null);

    const pos = detectDockCandidate(
      currentRect.x,
      currentRect.y,
      currentRect.width,
      currentRect.height,
      this.lastWorkspaceRect
    );

    if (!pos) {
      const clamped = clampWindowPosition(
        currentRect.x,
        currentRect.y,
        currentRect.width,
        currentRect.height,
        this.lastWorkspaceRect
      );
      this.move(id, clamped.x, clamped.y);
      return;
    }

    const candidate = this.evaluateDockCandidate(id, pos);
    if (!candidate) {
      const clamped = clampWindowPosition(
        currentRect.x,
        currentRect.y,
        currentRect.width,
        currentRect.height,
        this.lastWorkspaceRect
      );
      this.move(id, clamped.x, clamped.y);
      return;
    }

    this.applyDock(id, pos);
  }

  setSplitRatio(ratio: number): void {
    const dock = this.dockStateSignal();
    if (!dock) return;
    const clamped = Math.max(0.15, Math.min(0.85, ratio));
    this.dockStateSignal.set({ ...dock, ratio: clamped });
    this.recalculateDockGeometries();
  }

  private evaluateDockCandidate(id: string, pos: DockPosition): boolean {
    const dock = this.dockStateSignal();
    const targetOrient = getPositionOrientation(pos);

    if (!dock) {
      return canAccommodateDock(targetOrient, this.lastWorkspaceRect);
    }

    if (dock.firstWindowId === id || dock.secondWindowId === id) {
      return false;
    }

    if (dock.secondWindowId) {
      return false;
    }

    if (dock.orientation !== targetOrient) {
      return false;
    }

    const firstWin = this.windowsState().find(w => w.id === dock.firstWindowId);
    if (!firstWin || !firstWin.dockedPosition) {
      return false;
    }

    const expectedSecondPos = getOppositePosition(firstWin.dockedPosition);
    return pos === expectedSecondPos;
  }

  private applyDock(id: string, pos: DockPosition): void {
    const dock = this.dockStateSignal();
    const orient = getPositionOrientation(pos);
    const win = this.windowsState().find(w => w.id === id);
    if (!win) return;

    const restoreGeom = win.restoreGeometry ?? {
      x: win.x,
      y: win.y,
      width: win.width,
      height: win.height
    };

    if (!dock) {
      this.dockStateSignal.set({
        orientation: orient,
        firstWindowId: id,
        ratio: 0.5
      });

      this.updateWindow(id, {
        dockedPosition: pos,
        restoreGeometry: restoreGeom,
        zIndex: this.DOCK_BASE_Z_INDEX
      });
    } else {
      this.dockStateSignal.set({
        ...dock,
        secondWindowId: id
      });

      this.updateWindow(id, {
        dockedPosition: pos,
        restoreGeometry: restoreGeom,
        zIndex: this.DOCK_BASE_Z_INDEX
      });
    }

    this.recalculateDockGeometries();
    this.activate(id);
  }

  private undockWindowOnDrag(win: MdiWindow): void {
    const geom = win.restoreGeometry ?? {
      x: Math.max(20, win.x + 20),
      y: Math.max(20, win.y + 20),
      width: 760,
      height: 480
    };

    this.handleWindowRemovalFromDock(win.id);

    this.updateWindow(win.id, {
      dockedPosition: undefined,
      restoreGeometry: undefined,
      zIndex: ++this.nextZIndex,
      width: geom.width,
      height: geom.height
    });
  }

  private handleWindowRemovalFromDock(removedId: string): void {
    const dock = this.dockStateSignal();
    if (!dock) return;

    if (dock.firstWindowId !== removedId && dock.secondWindowId !== removedId) {
      return;
    }

    const remainingId = dock.firstWindowId === removedId ? dock.secondWindowId : dock.firstWindowId;
    this.dockStateSignal.set(null);

    if (remainingId) {
      this.restoreDockedWindowToFloating(remainingId);
    }
  }

  private undockRemainingToFloating(minimizedId: string): void {
    const dock = this.dockStateSignal();
    if (!dock) return;

    const remainingId = dock.firstWindowId === minimizedId ? dock.secondWindowId : dock.firstWindowId;
    this.dockStateSignal.set(null);

    if (remainingId) {
      this.restoreDockedWindowToFloating(remainingId);
    }

    const minWin = this.windowsState().find(w => w.id === minimizedId);
    if (minWin) {
      const geom = minWin.restoreGeometry;
      this.updateWindow(minimizedId, {
        dockedPosition: undefined,
        restoreGeometry: undefined,
        ...(geom ? { x: geom.x, y: geom.y, width: geom.width, height: geom.height } : {})
      });
    }
  }

  private restoreDockedWindowToFloating(id: string): void {
    const win = this.windowsState().find(w => w.id === id);
    if (!win) return;

    const geom = win.restoreGeometry ?? {
      x: Math.max(20, win.x),
      y: Math.max(20, win.y),
      width: Math.min(760, this.lastWorkspaceRect.width - 40),
      height: Math.min(480, this.lastWorkspaceRect.height - 40)
    };

    this.updateWindow(id, {
      dockedPosition: undefined,
      restoreGeometry: undefined,
      x: geom.x,
      y: geom.y,
      width: geom.width,
      height: geom.height
    });
  }

  private restoreFromMaximize(target: MdiWindow): void {
    const restore = target.restoreGeometry;
    this.updateWindow(target.id, {
      maximized: false,
      ...(restore ? { x: restore.x, y: restore.y, width: restore.width, height: restore.height } : {})
    });
    this.recalculateDockGeometries();
  }

  private applyMaximize(target: MdiWindow): void {
    this.updateWindow(target.id, {
      restoreGeometry: { x: target.x, y: target.y, width: target.width, height: target.height },
      maximized: true
    });
  }

  private recalculateDockGeometries(): void {
    const dock = this.dockStateSignal();
    if (!dock) return;

    const firstWin = this.windowsState().find(w => w.id === dock.firstWindowId);
    if (!firstWin || !firstWin.dockedPosition) {
      this.clearDocking();
      return;
    }

    const secondWin = dock.secondWindowId
      ? this.windowsState().find(w => w.id === dock.secondWindowId)
      : undefined;

    const geoms = calculateDockGeometries(
      dock.orientation,
      firstWin.dockedPosition,
      dock.ratio,
      this.lastWorkspaceRect,
      !!secondWin
    );

    this.windowsState.update(windows =>
      windows.map(w => {
        if (w.id === firstWin.id && !w.maximized) {
          return { ...w, ...geoms.first };
        }
        if (secondWin && w.id === secondWin.id && geoms.second && !w.maximized) {
          return { ...w, ...geoms.second };
        }
        return w;
      })
    );
  }

  private clearDocking(): void {
    this.dockStateSignal.set(null);
    this.windowsState.update(windows =>
      windows.map(w => (w.dockedPosition ? { ...w, dockedPosition: undefined } : w))
    );
  }

  private updateWindow(id: string, changes: Partial<MdiWindow>): void {
    this.windowsState.update(windows =>
      windows.map(w => (w.id === id ? { ...w, ...changes } : w))
    );
  }

  private activateLast(): void {
    const remaining = this.windowsState()
      .filter(w => !w.minimized)
      .sort((a, b) => b.zIndex - a.zIndex);

    if (remaining.length > 0) {
      this.activate(remaining[0].id);
    }
  }

  private syncToSession(windows: MdiWindow[], dockState: MdiDockState | null): void {
    if (this.isRestoring || typeof window === 'undefined' || !window.sessionStorage) return;

    try {
      const serializableWindows: StoredWindowItem[] = windows.map(w => ({
        id: w.id,
        title: w.title,
        formId: w.formId,
        x: w.x,
        y: w.y,
        width: w.width,
        height: w.height,
        zIndex: w.zIndex,
        minimized: w.minimized,
        maximized: w.maximized,
        active: w.active,
        dockedPosition: w.dockedPosition,
        restoreGeometry: w.restoreGeometry
      }));

      const payload: StoredMdiSession = {
        windows: serializableWindows,
        dockState,
        nextZIndex: this.nextZIndex
      };

      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignorar fallos de cuota o serialización en sessionStorage
    }
  }

  private restoreFromSession(): void {
    if (typeof window === 'undefined' || !window.sessionStorage) return;

    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const data = JSON.parse(raw) as StoredMdiSession;
      if (!data || !Array.isArray(data.windows)) return;

      this.isRestoring = true;
      const restoredWindows: MdiWindow[] = [];

      for (const item of data.windows) {
        const formDef = getOrCreateForm(item.formId || item.title, item.title);
        restoredWindows.push({
          id: item.id,
          title: item.title,
          formId: item.formId,
          component: formDef.component,
          x: item.x,
          y: item.y,
          width: item.width,
          height: item.height,
          zIndex: item.zIndex,
          minimized: item.minimized,
          maximized: item.maximized,
          active: item.active,
          dockedPosition: item.dockedPosition,
          restoreGeometry: item.restoreGeometry
        });
      }

      this.windowsState.set(restoredWindows);
      if (data.dockState) {
        this.dockStateSignal.set(data.dockState);
      }
      if (typeof data.nextZIndex === 'number') {
        this.nextZIndex = data.nextZIndex;
      }
    } catch {
      // Ignorar errores al parsear
    } finally {
      this.isRestoring = false;
    }
  }
}
