import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-atencion-paciente',
  standalone: true,
  template: `
    <div class="page-container">
      <!-- Encabezado de página -->
      <div class="page-header">
        <div>
          <h2 class="page-title">Atención del Paciente</h2>
          <div class="breadcrumbs">
            <span>Admisiones</span> / <span>Atención del paciente</span> / <span class="active-crumb">Datos Básicos</span>
          </div>
        </div>
        <div class="header-actions">
          <button type="button" class="btn-action-primary">+ Nueva atención</button>
          <button type="button" class="btn-action-outline">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="3" x2="9" y2="21"/>
            </svg>
            <span>Abrir Atención</span>
          </button>
        </div>
      </div>

      <!-- Barra de Pestañas / Tabs -->
      <div class="nav-tabs">
        <button
          type="button"
          class="tab-btn"
          [class.active]="activeTab() === 'basicos'"
          (click)="setTab('basicos')"
        >
          Datos Básicos
        </button>
        <button
          type="button"
          class="tab-btn"
          [class.active]="activeTab() === 'ingreso'"
          (click)="setTab('ingreso')"
        >
          Ingreso
        </button>
        <button
          type="button"
          class="tab-btn"
          [class.active]="activeTab() === 'vinculaciones'"
          (click)="setTab('vinculaciones')"
        >
          Vinculaciones
        </button>
        <button
          type="button"
          class="tab-btn"
          [class.active]="activeTab() === 'accidente'"
          (click)="setTab('accidente')"
        >
          Datos de accidente
        </button>
        <button
          type="button"
          class="tab-btn"
          [class.active]="activeTab() === 'egreso'"
          (click)="setTab('egreso')"
        >
          Egreso
        </button>
        <button
          type="button"
          class="tab-btn"
          [class.active]="activeTab() === 'requisitos'"
          (click)="setTab('requisitos')"
        >
          Requisitos
        </button>
      </div>

      <!-- Tarjeta: Sucursal y Origen -->
      <div class="content-card">
        <div class="form-row-2">
          <div class="form-group">
            <label class="field-label required">Sucursal</label>
            <div class="select-wrap">
              <select class="field-select">
                <option>INSTITUTO NEUROLOGICO</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="field-label">Préstamo donde se realiza la atención</label>
            <div class="select-wrap">
              <select class="field-select">
                <option>-- Seleccione --</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Tarjeta: Información de la atención -->
      <div class="content-card">
        <div class="section-top-bar">
          <div class="section-title-wrap">
            <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" class="info-icon">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
            </svg>
            <span class="section-title">Información de la atención</span>
          </div>
        </div>

        <div class="attention-grid-row">
          <div class="form-group col-id">
            <label class="field-label">Id Atención</label>
            <input type="text" class="field-input readonly" value="0000..." readonly />
          </div>

          <div class="form-group col-tipo">
            <label class="field-label required">Tipo de atención</label>
            <div class="select-wrap">
              <select class="field-select">
                <option>-- Seleccione --</option>
                <option>Consulta Externa</option>
                <option>Urgencias</option>
                <option>Hospitalización</option>
              </select>
            </div>
          </div>

          <button type="button" class="btn-change-tipo">Cambiar tipo de atención</button>

          <div class="form-group col-muestra">
            <label class="field-label">Lugar de toma de muestra</label>
            <div class="select-wrap">
              <select class="field-select">
                <option>No Aplica</option>
              </select>
            </div>
          </div>

          <div class="status-flags">
            <label class="check-inline">
              <input type="checkbox" checked disabled />
              <span>Habilitado</span>
            </label>
            <label class="check-inline">
              <input type="checkbox" checked disabled />
              <span>Atención activa</span>
            </label>
            <label class="check-inline">
              <input type="checkbox" disabled />
              <span>No Atendida</span>
            </label>
          </div>

          <div class="movement-flags">
            <label class="check-inline">
              <input type="checkbox" checked disabled />
              <span>Movimientos Activos</span>
            </label>
            <label class="check-inline">
              <input type="checkbox" disabled />
              <span>Preadmisión</span>
            </label>
          </div>
        </div>

        <!-- Fila Paciente -->
        <div class="patient-search-row">
          <div class="form-group col-id-paciente">
            <label class="field-label">Id Paciente</label>
            <input type="text" class="field-input readonly" value="0000..." readonly />
          </div>

          <div class="form-group col-name-paciente">
            <label class="field-label">Apellidos y Nombres</label>
            <input type="text" class="field-input readonly" value="Apellidos y nombres del paciente..." readonly />
          </div>

          <button type="button" class="btn-search-paciente">
            <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <span>Buscar paciente</span>
          </button>

          <button type="button" class="btn-datos-paciente">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>Datos del paciente</span>
          </button>
        </div>

        <!-- Fila Médico y Puerta de Entrada -->
        <div class="form-row-2">
          <div class="form-group">
            <label class="field-label">Médico</label>
            <div class="input-with-action">
              <input type="text" class="field-input code-input" placeholder="" />
              <input type="text" class="field-input name-input" placeholder="Apellidos y nombres del médico..." readonly />
              <button type="button" class="btn-search-icon" title="Buscar médico">
                <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </div>
            <span class="field-hint">Solo se listan médicos activos habilitados para su rol y sede.</span>
          </div>

          <div class="form-group">
            <label class="field-label required">Puerta de Entrada al Servicio de Salud</label>
            <div class="select-wrap">
              <select class="field-select">
                <option>-- Seleccione --</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Fila Remisión y Zona -->
        <div class="form-row-2">
          <div class="form-group">
            <label class="field-label">Ciudad de remisión</label>
            <div class="input-with-action">
              <input type="text" class="field-input" placeholder="Sin seleccionar" readonly />
              <button type="button" class="btn-search-icon" title="Buscar ciudad">
                <svg viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="form-group">
            <label class="field-label">Zona</label>
            <div class="select-wrap">
              <select class="field-select">
                <option>-- Seleccione --</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Fila Modalidad, Grupo Sanguíneo, Factor RH -->
        <div class="form-row-3-unequal">
          <div class="form-group col-modalidad">
            <label class="field-label required">Modalidad de Realización de la Tecnología en Salud</label>
            <div class="select-wrap">
              <select class="field-select">
                <option>-- Seleccione --</option>
              </select>
            </div>
          </div>

          <div class="form-group col-grupo">
            <label class="field-label">Grupo Sanguíneo</label>
            <div class="select-wrap">
              <select class="field-select">
                <option>-- Seleccione --</option>
              </select>
            </div>
          </div>

          <div class="form-group col-rh">
            <label class="field-label">Factor RH</label>
            <div class="select-wrap">
              <select class="field-select">
                <option>-- Seleccione --</option>
              </select>
            </div>
          </div>
        </div>

        <div class="action-buttons-strip">
          <button type="button" class="btn-strip-blue">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>Recibe Paciente</span>
          </button>
          <button type="button" class="btn-strip-blue">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            <span>Remisión</span>
          </button>
          <button type="button" class="btn-strip-red-outline">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>Vincular a Programas de Fidelización FCV</span>
          </button>
        </div>
      </div>

      <!-- Tarjeta: Responsable y Acompañante -->
      <div class="content-card">
        <div class="section-top-bar">
          <div class="section-title-wrap">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span class="section-title">Responsable y Acompañante</span>
          </div>
        </div>

        <div class="form-row-three-contact">
          <div class="form-group col-responsable">
            <label class="field-label">Nombre del Responsable</label>
            <div class="input-count-wrap">
              <input type="text" class="field-input" />
              <span class="count-tag">0/50</span>
            </div>
          </div>

          <div class="form-group col-telefono">
            <label class="field-label">Teléfono</label>
            <div class="input-count-wrap">
              <input type="text" class="field-input" />
              <span class="count-tag">0/20</span>
            </div>
          </div>

          <div class="form-group col-parentesco">
            <label class="field-label">Parentesco</label>
            <div class="select-wrap">
              <select class="field-select">
                <option>--</option>
                <option>Padre/Madre</option>
                <option>Hijo(a)</option>
                <option>Cónyuge</option>
                <option>Hermano(a)</option>
                <option>Otro</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-row-three-contact">
          <div class="form-group col-responsable">
            <label class="field-label">Nombre del Acompañante</label>
            <div class="input-count-wrap">
              <input type="text" class="field-input" />
              <span class="count-tag">0/50</span>
            </div>
          </div>

          <div class="form-group col-telefono">
            <label class="field-label">Teléfono</label>
            <div class="input-count-wrap">
              <input type="text" class="field-input" />
              <span class="count-tag">0/20</span>
            </div>
          </div>

          <div class="form-group col-parentesco"></div>
        </div>

        <div class="radio-section">
          <span class="radio-label">Tratamiento de Datos a Paciente</span>
          <div class="radio-options">
            <label class="radio-item">
              <input type="radio" name="tratamiento" value="si" />
              <span>Sí</span>
            </label>
            <label class="radio-item">
              <input type="radio" name="tratamiento" value="no" checked />
              <span>No</span>
            </label>
          </div>
        </div>
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
    .btn-action-outline {
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
    .nav-tabs {
      display: flex;
      gap: 8px;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 0;
    }
    .tab-btn {
      background: transparent;
      border: none;
      padding: 10px 18px;
      font-size: 13px;
      font-weight: 600;
      color: #64748b;
      cursor: pointer;
      position: relative;
      border-bottom: 3px solid transparent;
      margin-bottom: -2px;
      transition: color 0.15s ease, border-color 0.15s ease;
    }
    .tab-btn:hover {
      color: #0284c7;
    }
    .tab-btn.active {
      color: #0284c7;
      border-bottom-color: #0284c7;
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
    .section-top-bar {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid #f1f5f9;
    }
    .section-title-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .info-icon {
      color: #0284c7;
    }
    .section-title {
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
    }
    .form-row-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
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
    .field-label.required::after {
      content: ' *';
      color: #ef4444;
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
    .field-input.readonly {
      background: #f8fafc;
      color: #64748b;
    }
    .attention-grid-row {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      gap: 14px;
    }
    .col-id {
      width: 100px;
    }
    .col-tipo {
      width: 220px;
    }
    .btn-change-tipo {
      background: #7ca3cc;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      height: 38px;
      padding: 0 14px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
    }
    .col-muestra {
      width: 200px;
    }
    .status-flags, .movement-flags {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 12px;
      color: #475569;
    }
    .check-inline {
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }
    .patient-search-row {
      display: flex;
      align-items: flex-end;
      gap: 14px;
    }
    .col-id-paciente {
      width: 110px;
    }
    .col-name-paciente {
      flex: 1;
    }
    .btn-search-paciente {
      background: #0284c7;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      height: 38px;
      padding: 0 16px;
      font-size: 13px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      white-space: nowrap;
    }
    .btn-datos-paciente {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      height: 38px;
      padding: 0 16px;
      font-size: 13px;
      color: #475569;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      white-space: nowrap;
    }
    .input-with-action {
      display: flex;
      gap: 6px;
    }
    .code-input {
      width: 70px;
    }
    .name-input {
      flex: 1;
    }
    .btn-search-icon {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #64748b;
      cursor: pointer;
      flex-shrink: 0;
    }
    .field-hint {
      font-size: 11px;
      color: #94a3b8;
    }
    .form-row-3-unequal {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 16px;
    }
    .action-buttons-strip {
      display: flex;
      gap: 12px;
      margin-top: 8px;
    }
    .btn-strip-blue {
      background: #7ca3cc;
      color: #ffffff;
      border: none;
      border-radius: 8px;
      height: 38px;
      padding: 0 16px;
      font-size: 12px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }
    .btn-strip-red-outline {
      background: #ffffff;
      color: #ef4444;
      border: 1px solid #fca5a5;
      border-radius: 8px;
      height: 38px;
      padding: 0 16px;
      font-size: 12px;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
    }
    .form-row-three-contact {
      display: grid;
      grid-template-columns: 1fr 220px 220px;
      gap: 16px;
    }
    .input-count-wrap {
      position: relative;
    }
    .input-count-wrap .field-input {
      padding-right: 44px;
    }
    .count-tag {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 11px;
      color: #94a3b8;
    }
    .radio-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-top: 10px;
    }
    .radio-label {
      font-size: 12px;
      font-weight: 600;
      color: #475569;
    }
    .radio-options {
      display: flex;
      gap: 20px;
    }
    .radio-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: #334155;
      cursor: pointer;
    }
  `]
})
export class AtencionPacienteComponent {
  readonly activeTab = signal<'basicos' | 'ingreso' | 'vinculaciones' | 'accidente' | 'egreso' | 'requisitos'>('basicos');

  setTab(tab: 'basicos' | 'ingreso' | 'vinculaciones' | 'accidente' | 'egreso' | 'requisitos'): void {
    this.activeTab.set(tab);
  }
}
