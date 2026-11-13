import { Component, signal, computed, inject, DestroyRef } from '@angular/core';
import { injectHotkey } from '@tanstack/angular-hotkeys';
import { MDI_WINDOW_ID } from '../../../../core/mdi/models/mdi-tokens';
import { CoreCommandsService } from '../../../../core/commands/core-commands.service';
import { RefreshableForm } from '../../../../core/commands/models/app-command.model';
import { NumeracionModalComponent } from './numeracion-modal/numeracion-modal.component';

export interface NumeracionRecord {
  id: string;
  modulo: string;
  tipoDocumento: string;
  prefijo: string;
  rango: string;
  actual: number;
  resolucion: string;
  estado: 'Habilitada' | 'Inhabilitada';
}

@Component({
  selector: 'app-numeracion',
  standalone: true,
  imports: [NumeracionModalComponent],
  templateUrl: './numeracion.component.html',
  styleUrls: ['./numeracion.component.css']
})
export class NumeracionComponent implements RefreshableForm {
  readonly windowId = inject(MDI_WINDOW_ID, { optional: true });
  private readonly coreCommands = inject(CoreCommandsService);
  private readonly destroyRef = inject(DestroyRef);

  readonly searchTerm = signal('');
  readonly selectedModule = signal('');
  readonly modalVisible = signal(false);

  readonly items = signal<NumeracionRecord[]>([
    {
      id: 'num-1',
      modulo: 'Cuentas por Pagar',
      tipoDocumento: 'Documento Equivalente No obligados a facturar',
      prefijo: 'DSHI',
      rango: '1 – 1000',
      actual: 832,
      resolucion: '18764002210521',
      estado: 'Inhabilitada'
    },
    {
      id: 'num-2',
      modulo: 'Cuentas por Pagar',
      tipoDocumento: 'Documento Equivalente No obligados a facturar',
      prefijo: 'DSHI',
      rango: '1 – 1000',
      actual: 543,
      resolucion: '18764025632158',
      estado: 'Inhabilitada'
    }
  ]);

  readonly filteredList = computed(() => {
    const q = this.searchTerm().trim().toLowerCase();
    const mod = this.selectedModule();

    return this.items().filter(item => {
      const matchSearch =
        !q ||
        item.modulo.toLowerCase().includes(q) ||
        item.tipoDocumento.toLowerCase().includes(q) ||
        item.prefijo.toLowerCase().includes(q) ||
        item.resolucion.toLowerCase().includes(q);

      const matchMod = !mod || item.modulo === mod;
      return matchSearch && matchMod;
    });
  });

  constructor() {
    injectHotkey('Alt+N', () => this.abrirModalNueva(), {
      meta: {
        name: 'Nueva numeración',
        description: 'Abrir diálogo para registrar una nueva numeración',
        category: 'Módulo'
      }
    });

    if (this.windowId) {
      const unregister = this.coreCommands.registerRefreshable(this.windowId, this);
      this.destroyRef.onDestroy(() => unregister());
    }
  }

  abrirModalNueva(): void {
    this.modalVisible.set(true);
  }

  cerrarModal(): void {
    this.modalVisible.set(false);
  }

  refreshView(): void {
    this.searchTerm.set('');
    this.selectedModule.set('');
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }

  onModuleFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedModule.set(target.value);
  }
}
