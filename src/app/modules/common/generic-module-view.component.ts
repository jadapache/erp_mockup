import { Component, input } from '@angular/core';

@Component({
  selector: 'app-generic-module-view',
  standalone: true,
  template: `
    <div class="generic-container">
      <div class="header">
        <h2 class="title">{{ title() }}</h2>
        <span class="badge">{{ moduleName() }}</span>
      </div>
      <p class="desc">Vista preliminar generada para el formulario MDI de {{ moduleName() }}.</p>

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
  `,
  styles: [`
    .generic-container {
      padding: 24px;
      color: #1e293b;
    }
    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 6px;
    }
    .title {
      font-size: 18px;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }
    .badge {
      font-size: 11px;
      background: #e0f2fe;
      color: #0369a1;
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: 600;
    }
    .desc {
      font-size: 13px;
      color: #64748b;
      margin: 0 0 20px 0;
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
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
