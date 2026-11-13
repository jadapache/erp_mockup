import { Component, signal, input } from '@angular/core';
import { injectHotkey, provideHotkeys } from '@tanstack/angular-hotkeys';

@Component({
  selector: 'app-numeracion-modal',
  standalone: true,
  providers: [
    provideHotkeys({
      scope: 'dialog-nueva-numeracion',
      exclusive: true
    })
  ],
  templateUrl: './numeracion-modal.component.html',
  styleUrls: ['./numeracion-modal.component.css']
})
export class NumeracionModalComponent {
  readonly modulo = signal('');
  readonly prefijo = signal('');

  save = input<((val: { modulo: string; prefijo: string }) => void) | null>(null);
  close = input<(() => void) | null>(null);

  constructor() {
    injectHotkey('Escape', () => this.cancel());
    injectHotkey('Enter', () => this.confirm());
  }

  cancel(): void {
    if (this.close()) {
      this.close()!();
    }
  }

  confirm(): void {
    if (this.save()) {
      this.save()!({ modulo: this.modulo(), prefijo: this.prefijo() });
    }
    this.cancel();
  }
}
