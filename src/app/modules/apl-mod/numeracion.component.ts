import { Component, signal, computed, inject, input, DestroyRef } from '@angular/core';
import { injectHotkey, provideHotkeys } from '@tanstack/angular-hotkeys';
import { MDI_WINDOW_ID } from '../../core/mdi/models/mdi-tokens';
import { CoreCommandsService } from '../../core/commands/core-commands.service';
import { RefreshableForm } from '../../core/commands/models/app-command.model';

interface NumeracionRecord {
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
  selector: 'app-numeracion-modal',
  standalone: true,
  providers: [
    provideHotkeys({
      scope: 'dialog-nueva-numeracion',
      exclusive: true
    })
  ],
  template: `
    <div class="modal-backdrop" (click)="cancel()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h4 class="modal-title">Nueva Numeración</h4>
          <button type="button" class="btn-close-sm" (click)="cancel()">✕</button>
        </div>
        <div class="modal-body">
          <label class="field-label required">Módulo</label>
          <input type="text" class="field-input" placeholder="Nombre del módulo..." [value]="modulo()" (input)="modulo.set($any($event.target).value)" />
          
          <label class="field-label required" style="margin-top: 10px;">Prefijo</label>
          <input type="text" class="field-input" placeholder="Prefijo..." [value]="prefijo()" (input)="prefijo.set($any($event.target).value)" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-cancel" (click)="cancel()">Cancelar (Escape)</button>
          <button type="button" class="btn-confirm" (click)="confirm()">Guardar (Enter)</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.4);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .modal-content {
      background: #ffffff;
      border-radius: 10px;
      width: 400px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .modal-header {
      padding: 14px 18px;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f8fafc;
    }
    .modal-title {
      margin: 0;
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
    }
    .btn-close-sm {
      background: none;
      border: none;
      cursor: pointer;
      color: #64748b;
    }
    .modal-body {
      padding: 16px 18px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .field-label {
      font-size: 12px;
      font-weight: 600;
      color: #475569;
    }
    .field-input {
      width: 100%;
      height: 36px;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 0 10px;
      font-size: 13px;
      box-sizing: border-box;
    }
    .modal-footer {
      padding: 12px 18px;
      border-top: 1px solid #e2e8f0;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      background: #f8fafc;
    }
    .btn-cancel {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 6px 14px;
      font-size: 12px;
      font-weight: 600;
      color: #475569;
      cursor: pointer;
    }
    .btn-confirm {
      background: #0284c7;
      color: #ffffff;
      border: none;
      border-radius: 6px;
      padding: 6px 14px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
    }
  `]
})
export class NumeracionModalComponent {
  readonly modulo = signal('Facturación');
  readonly prefijo = signal('FE');

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

@Component({
  selector: 'app-numeracion',
  standalone: true,
  imports: [NumeracionModalComponent],
  template: `
    <div class="page-container">
      <div class="page-header">
        <div class="header-left">
          <h2 class="page-title">Numeración</h2>
          <div class="breadcrumbs">
            <span>Administrador de Aplicación</span> / <span class="active-crumb">Numeración</span>
          </div>
        </div>
        <button type="button" class="btn-action-primary" (click)="abrirModalNueva()">+ Nueva Numeración (Alt+N)</button>
      </div>


      <div class="content-body">
        <div class="content-card">
        <div class="card-top-bar">
          <h3 class="card-title">Numeraciones Registradas</h3>
        </div>

        <div class="filters-row">
          <div class="search-input-wrap">
            <svg class="search-icon" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              class="search-field"
              placeholder="Buscar por módulo, documento, prefijo o re"
              [value]="searchTerm()"
              (input)="onSearchInput($event)"
            />
          </div>

          <div class="select-wrap">
            <select class="filter-select" (change)="onModuleFilterChange($event)">
              <option value="">Todos los módulos</option>
              <option value="Cuentas por Pagar">Cuentas por Pagar</option>
              <option value="Facturación">Facturación</option>
              <option value="Tesorería">Tesorería</option>
            </select>
          </div>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Módulo</th>
                <th>Tipo Documento</th>
                <th>Prefijo</th>
                <th>Rango (desde-hasta)</th>
                <th>Actual</th>
                <th>Resolución</th>
                <th>Estado</th>
                <th class="col-actions"></th>
              </tr>
            </thead>
            <tbody>
              @for (item of filteredList(); track item.id) {
                <tr>
                  <td>
                    <span class="badge-module">{{ item.modulo }}</span>
                  </td>
                  <td class="cell-doc-type">{{ item.tipoDocumento }}</td>
                  <td>{{ item.prefijo }}</td>
                  <td>{{ item.rango }}</td>
                  <td>{{ item.actual }}</td>
                  <td>{{ item.resolucion }}</td>
                  <td>
                    <span class="status-pill" [class.inactive]="item.estado === 'Inhabilitada'">
                      {{ item.estado }}
                    </span>
                  </td>
                  <td class="col-actions">
                    <button type="button" class="btn-table-edit" title="Editar">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

    @if (modalVisible()) {
      <app-numeracion-modal [close]="cerrarModal.bind(this)" />
    }
  `,
  styles: [`
    .page-container {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      box-sizing: border-box;
      background: #f4f5f7;
    }
    .page-header {
      background: #ffffff;
      padding: 16px 24px;
      border-bottom: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }
    .header-left {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .page-title {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
      line-height: 1.2;
    }
    .breadcrumbs {
      font-size: 13px;
      color: #64748b;
    }
    .active-crumb {
      color: #0284c7;
      font-weight: 600;
    }
    .btn-action-primary {
      background: #0284c7;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      height: 38px;
      padding: 0 18px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
    }
    .content-body {
      flex: 1;
      padding: 20px 24px;
      display: flex;
      flex-direction: column;
    }
    .content-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .card-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-title {
      font-size: 15px;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }
    .filters-row {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    .search-input-wrap {
      position: relative;
      flex: 1;
      max-width: 440px;
    }
    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
    }
    .search-field {
      width: 100%;
      height: 38px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 0 12px 0 36px;
      font-size: 13px;
      outline: none;
      box-sizing: border-box;
      background: #ffffff;
    }
    .select-wrap {
      width: 200px;
    }
    .filter-select {
      width: 100%;
      height: 38px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 0 12px;
      font-size: 13px;
      color: #334155;
      background: #ffffff;
      outline: none;
    }
    .table-responsive {
      overflow-x: auto;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }
    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
      text-align: left;
    }
    .data-table thead {
      background: #e0ecf8;
      color: #334155;
      font-weight: 600;
    }
    .data-table th, .data-table td {
      padding: 12px 14px;
      border-bottom: 1px solid #f1f5f9;
    }
    .badge-module {
      display: inline-block;
      padding: 4px 10px;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 20px;
      font-size: 12px;
      color: #334155;
      font-weight: 500;
    }
    .cell-doc-type {
      max-width: 220px;
      line-height: 1.4;
      color: #334155;
    }
    .status-pill {
      font-size: 12px;
      font-weight: 500;
      color: #059669;
    }
    .status-pill.inactive {
      color: #64748b;
    }
    .col-actions {
      text-align: right;
      width: 48px;
    }
    .btn-table-edit {
      background: transparent;
      border: none;
      color: #64748b;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .btn-table-edit:hover {
      background: #f1f5f9;
      color: #0284c7;
    }
  `]
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
