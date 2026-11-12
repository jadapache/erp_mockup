import { Component, input } from '@angular/core';

@Component({
  selector: 'app-generic-module-view',
  standalone: true,
  template: `
    <div class="generic-container">
      <div class="view-header">
        <div class="header-left">
          <h2 class="view-title">{{ title() }}</h2>
          <div class="breadcrumbs">
            <span>{{ moduleName() }}</span> / <span class="active-crumb">{{ title() }}</span>
          </div>
        </div>
        <div class="header-actions">
          <button type="button" class="btn-action">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span>Buscar</span>
          </button>
          <button type="button" class="btn-primary">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            <span>Nuevo</span>
          </button>
        </div>
      </div>

      <div class="content-body">
        <div class="card-grid">
          <div class="card">
            <div class="card-bar"></div>
            <div class="card-content">
              <div class="skeleton-line full"></div>
              <div class="skeleton-line half"></div>
              <div class="skeleton-block"></div>
            </div>
          </div>
          <div class="card">
            <div class="card-bar alt"></div>
            <div class="card-content">
              <div class="skeleton-line full"></div>
              <div class="skeleton-line half"></div>
              <div class="skeleton-block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .generic-container {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      box-sizing: border-box;
      background: #f4f5f7;
    }
    .view-header {
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
    .view-title {
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
    .header-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .btn-action {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 7px 14px;
      font-size: 13px;
      color: #475569;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .btn-action:hover {
      background: #f8fafc;
      border-color: #94a3b8;
      color: #0f172a;
    }
    .btn-primary {
      background: #0284c7;
      border: 1px solid #0284c7;
      border-radius: 8px;
      padding: 7px 14px;
      font-size: 13px;
      color: #ffffff;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .btn-primary:hover {
      background: #0369a1;
      border-color: #0369a1;
    }
    .content-body {
      flex: 1;
      padding: 20px 24px;
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .card-bar {
      height: 4px;
      background: #0284c7;
    }
    .card-bar.alt {
      background: #059669;
    }
    .card-content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .skeleton-line {
      height: 12px;
      background: #f1f5f9;
      border-radius: 4px;
    }
    .skeleton-line.full {
      width: 85%;
    }
    .skeleton-line.half {
      width: 45%;
    }
    .skeleton-block {
      height: 90px;
      background: #f8fafc;
      border: 1px dashed #cbd5e1;
      border-radius: 6px;
      margin-top: 4px;
    }
  `]
})
export class GenericModuleViewComponent {
  title = input<string>('Formulario');
  moduleName = input<string>('Módulo');
}
