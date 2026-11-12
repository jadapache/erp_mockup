import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-view',
  standalone: true,
  template: `
    <div class="welcome-container">
      <div class="welcome-card">
        <div class="avatar-badge">U</div>
        <h1 class="welcome-title">Bienvenido, usuario2039</h1>
        <p class="welcome-subtitle">Sede activa: HOSPITAL INTERNACIONAL DE COLOMBIA</p>
        <div class="tag-pill">SAHISmart ERP</div>
        <div class="divider"></div>
        <p class="welcome-instructions">
          Use el menú lateral o el buscador del encabezado para navegar por los módulos y funcionalidades habilitadas para su usuario.
        </p>
      </div>
    </div>
  `,
  styles: [`
    .welcome-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100%;
      padding: 40px 20px;
    }
    .welcome-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      padding: 48px 36px;
      max-width: 620px;
      width: 100%;
      text-align: center;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    }
    .avatar-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      border-radius: 16px;
      background: #eff6ff;
      color: #1e40af;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 24px;
    }
    .welcome-title {
      font-size: 26px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 8px 0;
    }
    .welcome-subtitle {
      font-size: 15px;
      color: #64748b;
      margin: 0 0 20px 0;
    }
    .tag-pill {
      display: inline-block;
      padding: 6px 18px;
      background: #f1f5f9;
      color: #475569;
      font-size: 13px;
      font-weight: 600;
      border-radius: 9999px;
      margin-bottom: 24px;
    }
    .divider {
      height: 1px;
      background: #f1f5f9;
      margin-bottom: 24px;
    }
    .welcome-instructions {
      font-size: 14px;
      color: #64748b;
      line-height: 1.6;
      margin: 0;
    }
  `]
})
export class InicioViewComponent {}
