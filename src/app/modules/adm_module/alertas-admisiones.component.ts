import { Component, signal } from '@angular/core';

interface AlertaItem {
  id: string;
  atencion: string;
  paciente: string;
  tipoAlerta: string;
  detalle: string;
  habilitado: boolean;
  nivel: 'Baja' | 'Medio' | 'Alto';
}

@Component({
  selector: 'app-alertas-admisiones',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="page-header">
        <div>
          <h2 class="page-title">Alertas</h2>
          <div class="breadcrumbs">
            <span>Admisiones</span> / <span>Procesos</span> / <span class="active-crumb">Alertas</span>
          </div>
        </div>
        <div class="header-actions">
          <button type="button" class="btn-refresh">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 4 23 10 17 10"/>
              <polyline points="1 20 1 14 7 14"/>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
            </svg>
            <span>Actualizar</span>
          </button>
          <button type="button" class="btn-save">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
              <polyline points="17 21 17 13 7 13 7 21"/>
              <polyline points="7 3 7 8 15 8"/>
            </svg>
            <span>Guardar</span>
          </button>
        </div>
      </div>

      <!-- KPI Summary Cards -->
      <div class="kpi-grid">
        <div class="kpi-card">
          <svg class="kpi-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <div class="kpi-info">
            <span class="kpi-number">0</span>
            <span class="kpi-label">Estancia</span>
          </div>
        </div>

        <div class="kpi-card">
          <svg class="kpi-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" stroke-width="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
          <div class="kpi-info">
            <span class="kpi-number">3</span>
            <span class="kpi-label">Accidente de Tránsito</span>
          </div>
        </div>

        <div class="kpi-card">
          <svg class="kpi-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" stroke-width="2">
            <line x1="8" y1="6" x2="21" y2="6"/>
            <line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/>
            <line x1="3" y1="12" x2="3.01" y2="12"/>
            <line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
          <div class="kpi-info">
            <span class="kpi-number">0</span>
            <span class="kpi-label">Autorizar Procedimiento</span>
          </div>
        </div>

        <div class="kpi-card">
          <svg class="kpi-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <div class="kpi-info">
            <span class="kpi-number">0</span>
            <span class="kpi-label">PreTriage</span>
          </div>
        </div>

        <div class="kpi-card">
          <svg class="kpi-icon" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284c7" stroke-width="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          <div class="kpi-info">
            <span class="kpi-number">0</span>
            <span class="kpi-label">Salida Paciente</span>
          </div>
        </div>
      </div>

      <!-- Leyenda de Estados -->
      <div class="legend-bar">
        <span class="legend-title">Estados</span>
        <div class="legend-item">
          <span class="dot green"></span>
          <span>Bajo</span>
        </div>
        <div class="legend-item">
          <span class="dot yellow"></span>
          <span>Medio</span>
        </div>
        <div class="legend-item">
          <span class="dot red"></span>
          <span>Alto</span>
        </div>
      </div>

      <!-- Tabla de Alertas -->
      <div class="table-container">
        <table class="alert-table">
          <thead>
            <tr>
              <th>Atención</th>
              <th>Paciente</th>
              <th>Tipo Alerta</th>
              <th>Detalle</th>
              <th class="th-h">H</th>
            </tr>
          </thead>
          <tbody>
            @for (alert of alerts(); track alert.id) {
              <tr class="row-alert-high">
                <td class="cell-atencion">{{ alert.atencion }}</td>
                <td class="cell-paciente">{{ alert.paciente }}</td>
                <td class="cell-tipo">{{ alert.tipoAlerta }}</td>
                <td class="cell-detalle">{{ alert.detalle }}</td>
                <td class="th-h">
                  <input
                    type="checkbox"
                    [checked]="alert.habilitado"
                    (change)="toggleAlert(alert)"
                    class="check-h"
                  />
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .page-container {
      padding: 24px;
      color: #1e293b;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 16px;
      height: 100%;
      overflow-y: auto;
    }
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .page-title {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 4px 0;
    }
    .breadcrumbs {
      font-size: 13px;
      color: #64748b;
    }
    .active-crumb {
      color: #0284c7;
      font-weight: 600;
    }
    .header-actions {
      display: flex;
      gap: 10px;
    }
    .btn-refresh {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 0 16px;
      height: 38px;
      font-size: 13px;
      color: #475569;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }
    .btn-save {
      background: #7ca3cc;
      border: none;
      border-radius: 8px;
      padding: 0 18px;
      height: 38px;
      font-size: 13px;
      color: #ffffff;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 14px;
    }
    .kpi-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 14px;
      display: flex;
      align-items: center;
      gap: 14px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .kpi-icon {
      flex-shrink: 0;
    }
    .kpi-info {
      display: flex;
      flex-direction: column;
    }
    .kpi-number {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.2;
    }
    .kpi-label {
      font-size: 11px;
      color: #64748b;
      white-space: nowrap;
    }
    .legend-bar {
      display: flex;
      align-items: center;
      gap: 16px;
      background: #ffffff;
      padding: 8px 16px;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      width: fit-content;
      font-size: 12px;
    }
    .legend-title {
      font-weight: 700;
      color: #1e293b;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #475569;
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid;
    }
    .dot.green {
      border-color: #10b981;
    }
    .dot.yellow {
      border-color: #f59e0b;
    }
    .dot.red {
      border-color: #ef4444;
    }
    .table-container {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .alert-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
      text-align: left;
    }
    .alert-table thead {
      background: #dbeafe;
      color: #1e293b;
      font-weight: 700;
    }
    .alert-table th, .alert-table td {
      padding: 12px 16px;
    }
    .row-alert-high {
      background: #fee2e2;
      border-left: 4px solid #ef4444;
      border-bottom: 1px solid #fecaca;
    }
    .cell-atencion {
      color: #dc2626;
      font-weight: 600;
    }
    .cell-paciente {
      color: #991b1b;
      font-weight: 500;
    }
    .cell-tipo {
      color: #991b1b;
    }
    .cell-detalle {
      color: #475569;
    }
    .th-h {
      text-align: center;
      width: 40px;
    }
    .check-h {
      accent-color: #0284c7;
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  `]
})
export class AlertasAdmisionesComponent {
  readonly alerts = signal<AlertaItem[]>([
    {
      id: 'al-1',
      atencion: '2294155',
      paciente: 'Paciente 506230 Pruebas 506230',
      tipoAlerta: 'Accidente de Tránsito',
      detalle: '',
      habilitado: true,
      nivel: 'Alto'
    },
    {
      id: 'al-2',
      atencion: '2315587',
      paciente: 'Paciente 510501 Pruebas 510501',
      tipoAlerta: 'Accidente de Tránsito',
      detalle: '',
      habilitado: true,
      nivel: 'Alto'
    },
    {
      id: 'al-3',
      atencion: '2325071',
      paciente: 'Paciente 511576 Pruebas 511576',
      tipoAlerta: 'Accidente de Tránsito',
      detalle: '',
      habilitado: true,
      nivel: 'Alto'
    }
  ]);

  toggleAlert(alert: AlertaItem): void {
    alert.habilitado = !alert.habilitado;
  }
}
