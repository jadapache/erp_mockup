import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-citas',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="page-header">
        <div class="header-left">
          <h2 class="page-title">Gestión de Citas</h2>
          <div class="breadcrumbs">
            <span>Admisiones</span> / <span class="active-crumb">Citas</span>
          </div>
        </div>
        <button type="button" class="btn-refresh">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 4 23 10 17 10"/>
            <polyline points="1 20 1 14 7 14"/>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
          </svg>
          <span>Actualizar</span>
        </button>
      </div>

      <div class="content-body">
        <div class="card-collapsible">
        <div class="card-header" (click)="toggleFilters()">
          <div class="header-left">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
            </svg>
            <span class="card-title">Filtros de búsqueda</span>
          </div>
          <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" class="chevron" [class.rotated]="!showFilters()">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
          </svg>
        </div>

        @if (showFilters()) {
          <div class="filter-body">
            <div class="form-row-3">
              <div class="form-group">
                <label class="field-label">Fecha Inicial</label>
                <div class="select-wrap">
                  <input type="text" class="field-input" value="2026-11-12" />
                  <svg class="input-arrow" viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>

              <div class="form-group">
                <label class="field-label">Fecha Final</label>
                <div class="select-wrap">
                  <input type="text" class="field-input" value="2026-11-13" />
                  <svg class="input-arrow" viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>

              <div class="form-group">
                <label class="field-label">Tipo de Documento</label>
                <div class="select-wrap">
                  <select class="field-select">
                    <option>Todos</option>
                    <option>Cédula de Ciudadanía</option>
                    <option>Tarjeta de Identidad</option>
                    <option>Cédula de Extranjería</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-row-3">
              <div class="form-group">
                <label class="field-label">Número de Documento</label>
                <div class="input-count-wrap">
                  <input type="text" class="field-input" placeholder="Ej. A1B2C3" />
                  <span class="count-tag">0/16</span>
                </div>
                <span class="field-hint">Admite letras y números</span>
              </div>

              <div class="form-group">
                <label class="field-label">Apellidos del Paciente</label>
                <div class="input-count-wrap">
                  <input type="text" class="field-input" placeholder="Apellidos" />
                  <span class="count-tag">0/50</span>
                </div>
              </div>

              <div class="form-group">
                <label class="field-label">Nombres del Paciente</label>
                <div class="input-count-wrap">
                  <input type="text" class="field-input" placeholder="Nombres" />
                  <span class="count-tag">0/50</span>
                </div>
              </div>
            </div>

            <div class="form-row-3">
              <div class="form-group">
                <label class="field-label">Médico Tratante</label>
                <div class="input-count-wrap">
                  <input type="text" class="field-input" placeholder="Nombre del médico" />
                  <span class="count-tag">0/100</span>
                </div>
              </div>

              <div class="form-group">
                <label class="field-label">Consultorio</label>
                <div class="input-count-wrap">
                  <input type="text" class="field-input" placeholder="Nombre del consultorio" />
                  <span class="count-tag">0/50</span>
                </div>
              </div>

              <div class="form-group">
                <label class="field-label">Tipo de Atención</label>
                <div class="input-count-wrap">
                  <input type="text" class="field-input" placeholder="Nombre del tipo" />
                  <span class="count-tag">0/50</span>
                </div>
              </div>
            </div>

            <div class="filter-actions">
              <button type="button" class="btn-clear">
                <span>✕ Limpiar filtros</span>
              </button>
              <button type="button" class="btn-search">
                <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <span>Buscar citas</span>
              </button>
            </div>
          </div>
        }
      </div>

      <div class="results-card">
        <div class="results-top">
          <div class="results-title-wrap">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span class="results-title">Citas pendientes — 0 resultado(s)</span>
          </div>
          <span class="results-hint">
            ⓘ Doble clic o Enter sobre una cita para iniciar la atención
          </span>
        </div>

        <div class="empty-citas-box">
          <svg class="empty-calendar-icon" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#94a3b8" stroke-width="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <p class="empty-text">No hay citas pendientes para los filtros indicados.</p>
        </div>

        <div class="pagination-bar">
          <span class="page-info">Mostrando 0-0 de 0</span>
          <div class="page-controls">
            <button type="button" class="page-circle-btn" disabled>‹</button>
            <button type="button" class="page-circle-btn" disabled>›</button>
            <div class="per-page-wrap">
              <select class="per-page-select">
                <option>20</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span>por página</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    .btn-refresh {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 6px 14px;
      font-size: 13px;
      color: #475569;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }
    .content-body {
      flex: 1;
      padding: 20px 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .card-collapsible {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      overflow: hidden;
    }
    .card-header {
      padding: 14px 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #1e293b;
    }
    .card-title {
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
    }
    .chevron {
      color: #64748b;
      transition: transform 0.2s ease;
    }
    .chevron.rotated {
      transform: rotate(180deg);
    }
    .filter-body {
      padding: 0 18px 18px 18px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      border-top: 1px solid #f1f5f9;
    }
    .form-row-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .field-label {
      font-size: 12px;
      font-weight: 600;
      color: #475569;
    }
    .select-wrap {
      position: relative;
    }
    .field-input, .field-select {
      width: 100%;
      height: 38px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 0 12px;
      font-size: 13px;
      background: #ffffff;
      color: #1e293b;
      outline: none;
      box-sizing: border-box;
    }
    .input-arrow {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
      pointer-events: none;
    }
    .input-count-wrap {
      position: relative;
    }
    .input-count-wrap .field-input {
      padding-right: 46px;
    }
    .count-tag {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 11px;
      color: #94a3b8;
    }
    .field-hint {
      font-size: 11px;
      color: #94a3b8;
    }
    .filter-actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 8px;
    }
    .btn-clear {
      background: transparent;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 0 16px;
      height: 38px;
      font-size: 13px;
      font-weight: 600;
      color: #64748b;
      cursor: pointer;
    }
    .btn-search {
      background: #0284c7;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      padding: 0 18px;
      height: 38px;
      font-size: 13px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }
    .results-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      display: flex;
      flex-direction: column;
    }
    .results-top {
      padding: 14px 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f1f5f9;
    }
    .results-title-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #1e293b;
    }
    .results-title {
      font-size: 13px;
      font-weight: 700;
      color: #1e293b;
    }
    .results-hint {
      font-size: 12px;
      color: #64748b;
    }
    .empty-citas-box {
      padding: 48px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
    .empty-text {
      font-size: 13px;
      color: #64748b;
      margin: 0;
    }
    .pagination-bar {
      padding: 12px 18px;
      border-top: 1px solid #f1f5f9;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: #64748b;
    }
    .page-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .page-circle-btn {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 1px solid #e2e8f0;
      background: #ffffff;
      color: #94a3b8;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .per-page-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-left: 8px;
    }
    .per-page-select {
      height: 28px;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 0 8px;
      font-size: 12px;
      color: #334155;
      background: #ffffff;
    }
  `]
})
export class CitasComponent {
  readonly showFilters = signal(true);

  toggleFilters(): void {
    this.showFilters.update(v => !v);
  }
}
