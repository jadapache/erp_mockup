import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-condiciones-tarifa',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="page-header">
        <h2 class="page-title">Condiciones de Tarifa</h2>
        <div class="breadcrumbs">
          <span>Contratos</span> / <span>Configuración</span> / <span class="active-crumb">Condiciones sobre tarifa</span>
        </div>
      </div>

      <div class="search-box">
        <label class="form-label">Contrato</label>
        <div class="search-row">
          <div class="input-icon-wrap" (click)="openContractModal()">
            <input
              type="text"
              class="form-input"
              [value]="selectedContract()"
              placeholder="Buscar contrato por código o nombre..."
              readonly
            />
            <svg class="search-icon" viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <label class="checkbox-label">
            <input type="checkbox" />
            <span>Incluir contratos inactivos</span>
          </label>
        </div>
      </div>

      <div class="empty-state">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#64748b" stroke-width="1.8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
        <p class="empty-text">Seleccione un contrato para ver y gestionar sus condiciones.</p>
      </div>

      @if (showModal()) {
        <div class="modal-backdrop" (click)="closeContractModal()">
          <div class="modal-dialog" (click)="$event.stopPropagation()">
            <div class="modal-header">
              <h3 class="modal-title">Buscar contrato</h3>
              <button class="modal-close" (click)="closeContractModal()">✕</button>
            </div>
            <div class="modal-body">
              <div class="modal-search">
                <input
                  type="text"
                  class="modal-input"
                  placeholder="Busque por código o nombre del contrato..."
                />
              </div>
              <div class="contract-list">
                <div class="list-heading">Contrato</div>
                @for (c of contracts; track c.code) {
                  <div class="contract-item" (click)="selectContract(c.code + ' · ' + c.name)">
                    <div class="item-title">{{ c.code }} · {{ c.name }} · {{ c.desc }}</div>
                  </div>
                }
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" (click)="closeContractModal()">Cerrar</button>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .page-container {
      padding: 24px;
      color: #1e293b;
      position: relative;
    }
    .page-title {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 4px 0;
    }
    .breadcrumbs {
      font-size: 12px;
      color: #64748b;
      margin-bottom: 20px;
    }
    .active-crumb {
      color: #2563eb;
      font-weight: 500;
    }
    .search-box {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px 24px;
      margin-bottom: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    }
    .form-label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: #334155;
      margin-bottom: 8px;
    }
    .search-row {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .input-icon-wrap {
      flex: 1;
      position: relative;
      cursor: pointer;
    }
    .form-input {
      width: 100%;
      height: 42px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 0 40px 0 14px;
      font-size: 13px;
      color: #334155;
      background: #ffffff;
      cursor: pointer;
      outline: none;
      box-sizing: border-box;
    }
    .search-icon {
      position: absolute;
      right: 12px;
      top: 13px;
      stroke: #64748b;
      pointer-events: none;
    }
    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #475569;
      cursor: pointer;
      white-space: nowrap;
    }
    .empty-state {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 60px 24px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    }
    .empty-text {
      font-size: 13px;
      color: #64748b;
      margin: 0;
    }
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.4);
      backdrop-filter: blur(2px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    .modal-dialog {
      background: #ffffff;
      border-radius: 14px;
      width: 90%;
      max-width: 620px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .modal-header {
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e2e8f0;
    }
    .modal-title {
      margin: 0;
      font-size: 17px;
      font-weight: 700;
      color: #0f172a;
    }
    .modal-close {
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      color: #64748b;
    }
    .modal-body {
      padding: 16px 20px;
    }
    .modal-input {
      width: 100%;
      height: 40px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 0 12px;
      font-size: 13px;
      margin-bottom: 16px;
      outline: none;
      box-sizing: border-box;
    }
    .contract-list {
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      overflow: hidden;
    }
    .list-heading {
      background: #e2e8f0;
      padding: 8px 12px;
      font-size: 12px;
      font-weight: 700;
      color: #334155;
    }
    .contract-item {
      padding: 12px;
      border-top: 1px solid #f1f5f9;
      font-size: 13px;
      color: #1e293b;
      cursor: pointer;
      transition: background 0.12s;
    }
    .contract-item:hover {
      background: #eff6ff;
    }
    .modal-footer {
      padding: 12px 20px;
      display: flex;
      justify-content: flex-end;
      border-top: 1px solid #e2e8f0;
    }
    .btn-secondary {
      height: 36px;
      padding: 0 16px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
    }
  `]
})
export class CondicionesTarifaComponent {
  readonly showModal = signal(false);
  readonly selectedContract = signal('');

  readonly contracts = [
    { code: 'C-9000', name: 'TERCERO CONTRATO PRUEBA', desc: 'Contrato habilitado y activo sobre la tarifa 9003 (HU-CON-009)' },
    { code: 'C-9001', name: 'TERCERO CONTRATO PRUEBA', desc: 'Contrato habilitado y activo sobre la tarifa 9001 (HU-CON-009)' },
    { code: 'C-9002', name: 'TERCERO CONTRATO PRUEBA', desc: 'Contrato habilitado y activo sobre la tarifa 9003 (HU-CON-009)' },
    { code: 'CV-9101', name: 'CONTRATANTE PRUEBA EPS · A', desc: 'vence en 15 días (entra por fecha)' },
  ];

  openContractModal(): void {
    this.showModal.set(true);
  }

  closeContractModal(): void {
    this.showModal.set(false);
  }

  selectContract(name: string): void {
    this.selectedContract.set(name);
    this.closeContractModal();
  }
}
