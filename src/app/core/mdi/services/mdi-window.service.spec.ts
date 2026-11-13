import { TestBed } from '@angular/core/testing';
import { MdiWindowService } from './mdi-window.service';
import { Component } from '@angular/core';

@Component({
  template: '<div>Dummy</div>'
})
class DummyComponent {}

describe('MdiWindowService Snap Docking (Horizontal Side-by-Side Only)', () => {
  let service: MdiWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdiWindowService);
    service.setWorkspaceRect({ width: 1000, height: 600 });
  });

  it('should open and activate a window', () => {
    const id = service.open('Test Window', DummyComponent);
    expect(service.windows().length).toBe(1);
    expect(service.activeWindow()?.id).toBe(id);
  });

  it('should minimize and restore window', () => {
    const id = service.open('Test Window', DummyComponent);
    service.minimize(id);
    expect(service.windows()[0].minimized).toBe(true);

    service.restore(id);
    expect(service.windows()[0].minimized).toBe(false);
    expect(service.activeWindow()?.id).toBe(id);
  });

  it('should maximize and restore window geometry', () => {
    const id = service.open('Test Window', DummyComponent, 500, 300);
    service.maximize(id);
    expect(service.windows()[0].maximized).toBe(true);

    service.maximize(id);
    expect(service.windows()[0].maximized).toBe(false);
    expect(service.windows()[0].width).toBe(500);
  });

  describe('Docking behavior', () => {
    it('should dock first window to left edge (horizontal 50%)', () => {
      const id = service.open('Win 1', DummyComponent, 500, 300);
      service.onDragEnd(id, { x: 10, y: 100, width: 500, height: 300 });

      const win = service.windows()[0];
      expect(win.dockedPosition).toBe('left');
      expect(win.x).toBe(0);
      expect(win.y).toBe(0);
      expect(win.width).toBe(500); // 1000 * 0.5
      expect(win.height).toBe(600);

      const dock = service.dockState();
      expect(dock).toBeTruthy();
      expect(dock?.orientation).toBe('horizontal');
      expect(dock?.firstWindowId).toBe(id);
      expect(dock?.secondWindowId).toBeUndefined();
    });

    it('should dock second window to right edge sharing horizontal orientation', () => {
      const id1 = service.open('Win 1', DummyComponent, 500, 300);
      const id2 = service.open('Win 2', DummyComponent, 500, 300);

      // Dock win 1 left
      service.onDragEnd(id1, { x: 5, y: 50, width: 500, height: 300 });

      // Dock win 2 right (1000 - (500 + 490) = 10 <= 20 threshold)
      service.onDragEnd(id2, { x: 490, y: 50, width: 500, height: 300 });

      const w1 = service.windows().find(w => w.id === id1);
      const w2 = service.windows().find(w => w.id === id2);

      expect(w1?.dockedPosition).toBe('left');
      expect(w2?.dockedPosition).toBe('right');
      expect(w1?.width).toBe(500);
      expect(w2?.x).toBe(500);
      expect(w2?.width).toBe(500);

      const dock = service.dockState();
      expect(dock?.firstWindowId).toBe(id1);
      expect(dock?.secondWindowId).toBe(id2);
    });

    it('should NOT dock on top or bottom edge', () => {
      const id1 = service.open('Win 1', DummyComponent, 500, 300);

      // Drag to top edge
      service.onDragEnd(id1, { x: 100, y: 5, width: 500, height: 300 });
      let w1 = service.windows().find(w => w.id === id1);
      expect(w1?.dockedPosition).toBeUndefined();
      expect(service.dockState()).toBeNull();

      // Drag to bottom edge
      service.onDragEnd(id1, { x: 100, y: 295, width: 500, height: 300 });
      w1 = service.windows().find(w => w.id === id1);
      expect(w1?.dockedPosition).toBeUndefined();
      expect(service.dockState()).toBeNull();
    });

    it('should NOT allow a third window to dock and floating window has higher z-index', () => {
      const id1 = service.open('Win 1', DummyComponent, 500, 300);
      const id2 = service.open('Win 2', DummyComponent, 500, 300);
      const id3 = service.open('Win 3', DummyComponent, 500, 300);

      service.onDragEnd(id1, { x: 5, y: 50, width: 500, height: 300 });
      service.onDragEnd(id2, { x: 490, y: 50, width: 500, height: 300 });

      // Try docking id3 to left
      service.onDragEnd(id3, { x: 5, y: 50, width: 500, height: 300 });
      const w1 = service.windows().find(w => w.id === id1);
      const w2 = service.windows().find(w => w.id === id2);
      const w3 = service.windows().find(w => w.id === id3);

      expect(w3?.dockedPosition).toBeUndefined();
      // Floating window z-index should be higher than docked windows
      expect(w3!.zIndex).toBeGreaterThan(w1!.zIndex);
      expect(w3!.zIndex).toBeGreaterThan(w2!.zIndex);
      // Floating window z-index is higher than dock splitter z-index (20)
      expect(w3!.zIndex).toBeGreaterThan(20);

      const dock = service.dockState();
      expect(dock?.firstWindowId).toBe(id1);
      expect(dock?.secondWindowId).toBe(id2);
    });

    it('should undock when dragging a docked window', () => {
      const id1 = service.open('Win 1', DummyComponent, 450, 280);
      service.onDragEnd(id1, { x: 5, y: 50, width: 450, height: 280 });
      expect(service.dockState()).toBeTruthy();

      service.onDragStart(id1);
      const w1 = service.windows().find(w => w.id === id1);
      expect(w1?.dockedPosition).toBeUndefined();
      expect(service.dockState()).toBeNull();
      expect(w1?.width).toBe(450);
      expect(w1?.height).toBe(280);
    });

    it('should restore remaining window to floating when one of the two docked is closed', () => {
      const id1 = service.open('Win 1', DummyComponent, 400, 300);
      const id2 = service.open('Win 2', DummyComponent, 420, 320);

      service.onDragEnd(id1, { x: 5, y: 50, width: 400, height: 300 });
      service.onDragEnd(id2, { x: 590, y: 50, width: 420, height: 320 });

      service.close(id1);

      expect(service.dockState()).toBeNull();
      const remaining = service.windows().find(w => w.id === id2);
      expect(remaining?.dockedPosition).toBeUndefined();
      expect(remaining?.width).toBe(420);
      expect(remaining?.height).toBe(320);
    });

    it('should adjust ratio with splitter and recalculate geometry', () => {
      const id1 = service.open('Win 1', DummyComponent, 400, 300);
      const id2 = service.open('Win 2', DummyComponent, 400, 300);

      service.onDragEnd(id1, { x: 5, y: 50, width: 400, height: 300 });
      service.onDragEnd(id2, { x: 590, y: 50, width: 400, height: 300 });

      service.setSplitRatio(0.7);

      const w1 = service.windows().find(w => w.id === id1);
      const w2 = service.windows().find(w => w.id === id2);

      expect(w1?.width).toBe(700); // 1000 * 0.7
      expect(w2?.x).toBe(700);
      expect(w2?.width).toBe(300);
    });

    it('should clear docking on cascade or tile', () => {
      const id1 = service.open('Win 1', DummyComponent, 400, 300);
      const id2 = service.open('Win 2', DummyComponent, 400, 300);

      service.onDragEnd(id1, { x: 5, y: 50, width: 400, height: 300 });
      service.onDragEnd(id2, { x: 590, y: 50, width: 400, height: 300 });

      expect(service.dockState()).toBeTruthy();
      service.cascade();
      expect(service.dockState()).toBeNull();
      expect(service.windows().every(w => !w.dockedPosition)).toBe(true);
    });
  });

  describe('SessionStorage Persistence', () => {
    afterEach(() => {
      sessionStorage.clear();
    });

    it('should persist open windows to sessionStorage', () => {
      service.open('Test Window', DummyComponent, 500, 300, 'asociarProductos');
      TestBed.flushEffects();
      const raw = sessionStorage.getItem('erp_mdi_session');
      expect(raw).toBeTruthy();
      const parsed = JSON.parse(raw!);
      expect(parsed.windows.length).toBe(1);
      expect(parsed.windows[0].title).toBe('Test Window');
      expect(parsed.windows[0].formId).toBe('asociarProductos');
    });

    it('should rehydrate windows from sessionStorage on initialization', () => {
      const sessionData = {
        windows: [
          {
            id: 'saved-1',
            title: 'Asociar Productos a Contratos',
            formId: 'asociarProductos',
            x: 50,
            y: 60,
            width: 800,
            height: 500,
            zIndex: 105,
            minimized: false,
            maximized: false,
            active: true
          }
        ],
        dockState: null,
        nextZIndex: 110
      };
      sessionStorage.setItem('erp_mdi_session', JSON.stringify(sessionData));

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({});
      const newService = TestBed.inject(MdiWindowService);

      expect(newService.windows().length).toBe(1);
      expect(newService.windows()[0].id).toBe('saved-1');
      expect(newService.windows()[0].title).toBe('Asociar Productos a Contratos');
      expect(newService.windows()[0].component).toBeTruthy();
      expect(newService.activeWindow()?.id).toBe('saved-1');
    });
  });
});
