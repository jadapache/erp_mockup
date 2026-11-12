import { Injectable, signal, computed } from '@angular/core';
import { Type } from '@angular/core';
import { MdiWindow } from '../models/mdi-window.model';

@Injectable({ providedIn: 'root' })
export class MdiWindowService {
  private readonly windowsState = signal<MdiWindow[]>([]);
  readonly windows = this.windowsState.asReadonly();

  readonly activeWindow = computed(() =>
    this.windowsState().find(w => w.active)
  );

  private nextZIndex = 100;

  open(title: string, component: Type<unknown>, width = 760, height = 480): string {
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
      ...windows.map(w => ({ ...w, active: false })),
      windowItem
    ]);

    return id;
  }

  activate(id: string): void {
    this.windowsState.update(windows =>
      windows.map(w => ({
        ...w,
        active: w.id === id && !w.minimized,
        zIndex: w.id === id ? ++this.nextZIndex : w.zIndex
      }))
    );
  }

  close(id: string): void {
    this.windowsState.update(windows => windows.filter(w => w.id !== id));
    this.activateLast();
  }

  minimize(id: string): void {
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
    this.windowsState.update(windows =>
      windows.map(w => {
        if (w.id !== id) return w;
        if (w.maximized) {
          return {
            ...w,
            ...w.restoreGeometry,
            maximized: false,
            restoreGeometry: undefined
          };
        }
        return {
          ...w,
          restoreGeometry: { x: w.x, y: w.y, width: w.width, height: w.height },
          maximized: true
        };
      })
    );
    this.activate(id);
  }

  move(id: string, x: number, y: number): void {
    this.updateWindow(id, { x, y });
  }

  resize(id: string, width: number, height: number): void {
    this.updateWindow(id, { width, height });
  }

  cascade(): void {
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
}
