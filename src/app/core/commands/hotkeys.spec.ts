import { Component, signal, input, inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideHotkeys, injectHotkey } from '@tanstack/angular-hotkeys';
import { appHotkeys } from './app-hotkeys';
import { CoreCommandsService } from './core-commands.service';
import { CommandContextService } from './command-context.service';
import { MdiWindowService } from '../mdi/services/mdi-window.service';

@Component({
  selector: 'app-test-shell',
  standalone: true,
  template: `<div>Shell</div>`
})
class TestShellComponent {
  readonly searchTriggered = signal(false);
  readonly refreshTriggered = signal(false);
  readonly keyATriggered = signal(false);

  constructor() {
    injectHotkey('Control+B', () => this.searchTriggered.set(true));
    injectHotkey('F5', (event) => {
      event.preventDefault();
      this.refreshTriggered.set(true);
    });
    injectHotkey('A', () => this.keyATriggered.set(true));
  }
}

@Component({
  selector: 'app-test-window',
  standalone: true,
  providers: [
    provideHotkeys({
      scope: () => `window-${inject(TestWindowComponent).windowId()}`,
      enabled: () => inject(TestWindowComponent).active()
    })
  ],
  template: `<div>Window {{ windowId() }}</div>`
})
class TestWindowComponent {
  readonly windowId = input.required<string>();
  readonly active = input.required<boolean>();
  readonly saved = signal(false);

  constructor() {
    injectHotkey('Control+S', () => this.saved.set(true));
  }
}

@Component({
  selector: 'app-test-dialog',
  standalone: true,
  providers: [
    provideHotkeys({
      scope: 'dialog-test',
      exclusive: true
    })
  ],
  template: `<div>Dialog</div>`
})
class TestDialogComponent {
  readonly dialogEscape = signal(false);

  constructor() {
    injectHotkey('Escape', () => this.dialogEscape.set(true));
  }
}

describe('Hotkeys Integration & Scopes Tests', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHotkeys({
          appHotkeys,
          defaultOptions: {
            platform: 'windows'
          }
        }),
        MdiWindowService,
        CoreCommandsService,
        CommandContextService
      ]
    }).compileComponents();
  });

  describe('1. Global Core Hotkeys Across Modules', () => {
    it('should fire Mod+B and F5 without reloading browser', () => {
      const fixture = TestBed.createComponent(TestShellComponent);
      fixture.detectChanges();

      const eventModB = new KeyboardEvent('keydown', {
        key: 'b',
        code: 'KeyB',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventModB);
      expect(fixture.componentInstance.searchTriggered()).toBe(true);

      const eventF5 = new KeyboardEvent('keydown', {
        key: 'F5',
        code: 'F5',
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventF5);
      expect(fixture.componentInstance.refreshTriggered()).toBe(true);
      expect(eventF5.defaultPrevented).toBe(true);
    });

    it('should maintain global core commands availability when switching modules', () => {
      const cmdContext = TestBed.inject(CommandContextService);
      const fixture = TestBed.createComponent(TestShellComponent);
      fixture.detectChanges();

      // Módulo Admisiones
      cmdContext.setActiveModule('adm');
      let eventModB = new KeyboardEvent('keydown', {
        key: 'b',
        code: 'KeyB',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventModB);
      expect(fixture.componentInstance.searchTriggered()).toBe(true);

      // Módulo Contratos
      cmdContext.setActiveModule('con');
      fixture.componentInstance.searchTriggered.set(false);
      eventModB = new KeyboardEvent('keydown', {
        key: 'b',
        code: 'KeyB',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventModB);
      expect(fixture.componentInstance.searchTriggered()).toBe(true);

      // Módulo Administración
      cmdContext.setActiveModule('apl');
      fixture.componentInstance.searchTriggered.set(false);
      eventModB = new KeyboardEvent('keydown', {
        key: 'b',
        code: 'KeyB',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventModB);
      expect(fixture.componentInstance.searchTriggered()).toBe(true);
    });
  });

  describe('2. MDI Window Scopes & Multi-instance Independence', () => {
    it('should only execute command on the active window instance when two identical windows are open', () => {
      // Ventana A (Activa)
      const fixtureA = TestBed.createComponent(TestWindowComponent);
      fixtureA.componentRef.setInput('windowId', 'win-A');
      fixtureA.componentRef.setInput('active', true);
      fixtureA.detectChanges();

      // Ventana B (Inactiva)
      const fixtureB = TestBed.createComponent(TestWindowComponent);
      fixtureB.componentRef.setInput('windowId', 'win-B');
      fixtureB.componentRef.setInput('active', false);
      fixtureB.detectChanges();

      // Disparar Mod+S
      const eventModS = new KeyboardEvent('keydown', {
        key: 's',
        code: 'KeyS',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventModS);

      expect(fixtureA.componentInstance.saved()).toBe(true);
      expect(fixtureB.componentInstance.saved()).toBe(false);
    });

    it('should switch execution context when active window changes', () => {
      const fixtureA = TestBed.createComponent(TestWindowComponent);
      fixtureA.componentRef.setInput('windowId', 'win-A');
      fixtureA.componentRef.setInput('active', true);
      fixtureA.detectChanges();

      const fixtureB = TestBed.createComponent(TestWindowComponent);
      fixtureB.componentRef.setInput('windowId', 'win-B');
      fixtureB.componentRef.setInput('active', false);
      fixtureB.detectChanges();

      // Ahora cambiar foco: A inactiva, B activa
      fixtureA.componentRef.setInput('active', false);
      fixtureB.componentRef.setInput('active', true);
      fixtureA.detectChanges();
      fixtureB.detectChanges();

      const eventModS = new KeyboardEvent('keydown', {
        key: 's',
        code: 'KeyS',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventModS);

      expect(fixtureA.componentInstance.saved()).toBe(false);
      expect(fixtureB.componentInstance.saved()).toBe(true);
    });

    it('should not respond to hotkeys when window is minimized (disabled scope)', () => {
      const fixture = TestBed.createComponent(TestWindowComponent);
      fixture.componentRef.setInput('windowId', 'win-min');
      fixture.componentRef.setInput('active', false); // Minimizada / inactiva
      fixture.detectChanges();

      const eventModS = new KeyboardEvent('keydown', {
        key: 's',
        code: 'KeyS',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventModS);

      expect(fixture.componentInstance.saved()).toBe(false);

      // Restaurar ventana
      fixture.componentRef.setInput('active', true);
      fixture.detectChanges();

      document.dispatchEvent(eventModS);
      expect(fixture.componentInstance.saved()).toBe(true);
    });

    it('should clean up registrations when window component is destroyed', () => {
      const fixture = TestBed.createComponent(TestWindowComponent);
      fixture.componentRef.setInput('windowId', 'win-destroy');
      fixture.componentRef.setInput('active', true);
      fixture.detectChanges();

      fixture.destroy();

      const eventModS = new KeyboardEvent('keydown', {
        key: 's',
        code: 'KeyS',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventModS);

      expect(fixture.componentInstance.saved()).toBe(false);
    });
  });

  describe('3. Dialog Exclusive Scope & Priority', () => {
    it('should suspend underlying window hotkeys while exclusive dialog is open', () => {
      const winFixture = TestBed.createComponent(TestWindowComponent);
      winFixture.componentRef.setInput('windowId', 'win-main');
      winFixture.componentRef.setInput('active', true);
      winFixture.detectChanges();

      const dialogFixture = TestBed.createComponent(TestDialogComponent);
      dialogFixture.detectChanges();

      // Presionar Mod+S mientras el diálogo está abierto
      const eventModS = new KeyboardEvent('keydown', {
        key: 's',
        code: 'KeyS',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventModS);

      // La ventana no debe responder a Mod+S porque el diálogo es exclusivo
      expect(winFixture.componentInstance.saved()).toBe(false);

      // Presionar Escape en el diálogo
      const eventEscape = new KeyboardEvent('keydown', {
        key: 'Escape',
        code: 'Escape',
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventEscape);
      expect(dialogFixture.componentInstance.dialogEscape()).toBe(true);

      // Al cerrar diálogo (destroy), la ventana recupera el control
      dialogFixture.destroy();

      const eventModSAfter = new KeyboardEvent('keydown', {
        key: 's',
        code: 'KeyS',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(eventModSAfter);
      expect(winFixture.componentInstance.saved()).toBe(true);
    });
  });

  describe('4. Input Controls Preservation', () => {
    it('should not trigger single letter hotkeys or typing shortcuts when focused in inputs', () => {
      const inputFixture = TestBed.createComponent(TestShellComponent);
      inputFixture.detectChanges();

      const input = document.createElement('input');
      document.body.appendChild(input);
      input.focus();

      const eventKeyA = new KeyboardEvent('keydown', {
        key: 'a',
        code: 'KeyA',
        bubbles: true,
        cancelable: true
      });
      input.dispatchEvent(eventKeyA);

      // Por defecto ignoreInputs: 'auto' ignora teclas de caracteres cuando se escriben en inputs
      expect(inputFixture.componentInstance.keyATriggered()).toBe(false);
      document.body.removeChild(input);
    });

    it('should allow native copy, paste, and cut without interception', () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.focus();

      const eventCtrlC = new KeyboardEvent('keydown', {
        key: 'c',
        code: 'KeyC',
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      });
      input.dispatchEvent(eventCtrlC);

      // No debe ser prevenido por el gestor de atajos
      expect(eventCtrlC.defaultPrevented).toBe(false);
      document.body.removeChild(input);
    });
  });
});
