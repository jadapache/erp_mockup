import { Component, signal, inject, DestroyRef } from '@angular/core';
import { injectHotkey } from '@tanstack/angular-hotkeys';
import { MDI_WINDOW_ID } from '../../../../core/mdi/models/mdi-tokens';
import { CoreCommandsService } from '../../../../core/commands/core-commands.service';
import { CommandContextService } from '../../../../core/commands/command-context.service';
import { RefreshableForm } from '../../../../core/commands/models/app-command.model';

@Component({
  selector: 'app-atencion-paciente',
  standalone: true,
  templateUrl: './atencion-paciente.component.html',
  styleUrls: ['./atencion-paciente.component.css']
})
export class AtencionPacienteComponent implements RefreshableForm {
  readonly windowId = inject(MDI_WINDOW_ID, { optional: true });
  private readonly coreCommands = inject(CoreCommandsService);
  private readonly cmdContext = inject(CommandContextService);
  private readonly destroyRef = inject(DestroyRef);

  readonly activeTab = signal<'basicos' | 'ingreso' | 'vinculaciones' | 'accidente' | 'egreso' | 'requisitos'>('basicos');
  readonly atencionCount = signal(0);
  readonly atencionEnEdicion = signal(false);

  constructor() {
    injectHotkey(
      'Alt+N',
      () => this.nuevaAtencion(),
      () => ({
        enabled: this.cmdContext.activeWindowId() === this.windowId,
        meta: {
          name: 'Nueva atención',
          description: 'Crear un nuevo registro de atención para el paciente',
          category: 'Ventanas' as const
        }
      })
    );

    if (this.windowId) {
      const unregister = this.coreCommands.registerRefreshable(this.windowId, this);
      this.destroyRef.onDestroy(() => unregister());
    }
  }

  nuevaAtencion(): void {
    this.atencionEnEdicion.set(true);
    this.atencionCount.update(c => c + 1);
    this.setTab('basicos');
  }

  refreshView(): void {
    this.setTab('basicos');
  }

  setTab(tab: 'basicos' | 'ingreso' | 'vinculaciones' | 'accidente' | 'egreso' | 'requisitos'): void {
    this.activeTab.set(tab);
  }
}
