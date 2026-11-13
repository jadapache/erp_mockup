import { Component, inject, signal, DestroyRef } from '@angular/core';
import { injectHotkey } from '@tanstack/angular-hotkeys';
import { MDI_WINDOW_ID } from '../../../../core/mdi/models/mdi-tokens';
import { CoreCommandsService } from '../../../../core/commands/core-commands.service';
import { RefreshableForm } from '../../../../core/commands/models/app-command.model';

@Component({
  selector: 'app-asociar-productos',
  standalone: true,
  templateUrl: './asociar-productos.component.html',
  styleUrls: ['./asociar-productos.component.css']
})
export class AsociarProductosComponent implements RefreshableForm {
  readonly windowId = inject(MDI_WINDOW_ID, { optional: true });
  private readonly coreCommands = inject(CoreCommandsService);
  private readonly destroyRef = inject(DestroyRef);

  readonly saveStatus = signal<string | null>(null);
  readonly saveCount = signal(0);

  constructor() {
    // Registrar atajo de instancia Control+S
    injectHotkey('Control+S', () => this.save(), {
      meta: {
        name: 'Guardar cambios',
        description: 'Guardar la asociación de productos en el contrato actual',
        category: 'Módulo'
      }
    });

    if (this.windowId) {
      const unregister = this.coreCommands.registerRefreshable(this.windowId, this);
      this.destroyRef.onDestroy(() => unregister());
    }
  }

  save(): void {
    this.saveCount.update(c => c + 1);
    const winSuffix = this.windowId ? ` [Ventana ${this.windowId.slice(0, 6)}]` : '';
    this.saveStatus.set(`Guardado #${this.saveCount()}${winSuffix}`);
  }

  refreshView(): void {
    this.saveStatus.set(null);
  }
}

