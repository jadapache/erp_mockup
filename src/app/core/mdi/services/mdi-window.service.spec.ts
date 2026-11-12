import { TestBed } from '@angular/core/testing';
import { MdiWindowService } from './mdi-window.service';
import { Component } from '@angular/core';

@Component({
  template: '<div>Dummy</div>'
})
class DummyComponent {}

describe('MdiWindowService', () => {
  let service: MdiWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdiWindowService);
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
});
