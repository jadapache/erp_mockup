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
      width: 100%;
      height: 100%;
      padding: clamp(16px, 3vh, 32px) 20px;
      box-sizing: border-box;
    }
    .welcome-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      padding: clamp(24px, 4vh, 40px) clamp(20px, 4vw, 36px);
      max-width: 620px;
      width: 100%;
      text-align: center;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      box-sizing: border-box;
    }
    .avatar-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: clamp(48px, 6vw, 64px);
      height: clamp(48px, 6vw, 64px);
      border-radius: 16px;
      background: #eff6ff;
      color: #1e40af;
      font-size: clamp(22px, 3vw, 28px);
      font-weight: 700;
      margin-bottom: clamp(12px, 2vh, 20px);
    }
    .welcome-title {
      font-size: clamp(20px, 2.5vw, 26px);
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 8px 0;
    }
    .welcome-subtitle {
      font-size: clamp(13px, 1.5vw, 15px);
      color: #64748b;
      margin: 0 0 clamp(12px, 2vh, 18px) 0;
    }
    .tag-pill {
      display: inline-block;
      padding: 6px 18px;
      background: #f1f5f9;
      color: #475569;
      font-size: 13px;
      font-weight: 600;
      border-radius: 9999px;
      margin-bottom: clamp(14px, 2.5vh, 22px);
    }
    .divider {
      height: 1px;
      background: #f1f5f9;
      margin-bottom: clamp(14px, 2.5vh, 22px);
    }
    .welcome-instructions {
      font-size: clamp(12.5px, 1.4vw, 14px);
      color: #64748b;
      line-height: 1.5;
      margin: 0;
    }
  `]
})
export class InicioViewComponent {}
