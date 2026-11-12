import { Component } from '@angular/core';

@Component({
  selector: 'app-asociar-productos',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="page-header">
        <div class="header-left">
          <h2 class="page-title">Asociar Productos a Contratos</h2>
          <div class="breadcrumbs">
            <span>Contratos</span> / <span>Configuración</span> / <span class="active-crumb">Asociar Productos</span>
          </div>
        </div>
      </div>

      <div class="content-body">
        <div class="content-box">
          <label class="form-label">Contrato</label>
          <div class="form-row">
            <select class="form-select">
              <option>Seleccione un contrato...</option>
              <option>C-9000 - TERCERO CONTRATO PRUEBA (HU-CON-009)</option>
              <option>C-9001 - TERCERO CONTRATO PRUEBA (HU-CON-009)</option>
              <option>C-9002 - TERCERO CONTRATO PRUEBA (HU-CON-009)</option>
            </select>
            <button class="btn btn-primary">Cargar productos</button>
          </div>

          <div class="field-readonly">
            <span>Productos configurados</span>
          </div>

          <div class="actions-row">
            <div class="action-links">
              <button class="btn-link">Habilitar todos</button>
              <button class="btn-link">Inhabilitar todos</button>
            </div>
            <button class="btn btn-primary">Agregar productos</button>
            <button class="btn btn-primary btn-save">Guardar</button>
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
    .content-body {
      flex: 1;
      padding: 20px 24px;
    }
    .content-box {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    }
    .form-label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: #334155;
      margin-bottom: 8px;
    }
    .form-row {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
    }
    .form-select {
      flex: 1;
      height: 42px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 0 12px;
      font-size: 13px;
      color: #475569;
      background: #ffffff;
      outline: none;
    }
    .btn {
      height: 42px;
      padding: 0 20px;
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      transition: background 0.15s ease;
    }
    .btn-primary {
      background: #7ca3cc;
      color: #ffffff;
    }
    .btn-primary:hover {
      background: #6088b3;
    }
    .btn-save {
      margin-left: auto;
    }
    .field-readonly {
      height: 42px;
      display: flex;
      align-items: center;
      padding: 0 14px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      color: #94a3b8;
      font-size: 13px;
      margin-bottom: 24px;
    }
    .actions-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .action-links {
      display: flex;
      gap: 16px;
      margin-right: 12px;
    }
    .btn-link {
      background: transparent;
      border: none;
      color: #5b87b7;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      padding: 0;
    }
    .btn-link:hover {
      text-decoration: underline;
    }
  `]
})
export class AsociarProductosComponent {}
