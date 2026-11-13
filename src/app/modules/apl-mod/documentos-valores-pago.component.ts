import { Component, signal, computed } from '@angular/core';

interface DocPagoNode {
  id: string;
  name: string;
  type: 'category' | 'document';
  codigo?: string;
  diasPendientes?: number;
  tipoDocumento?: string;
  tipoConsolidado?: string;
  requiereInfo?: {
    ciudad?: boolean;
    banco?: boolean;
    cliente?: boolean;
    consignacion?: boolean;
    fechaVencimiento?: boolean;
    tarjeta?: boolean;
    autorizacion?: boolean;
  };
  expanded?: boolean;
  children?: DocPagoNode[];
}

@Component({
  selector: 'app-documentos-valores-pago',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="page-header">
        <div class="header-left">
          <h2 class="page-title">Documentos Valores de Pago</h2>
          <div class="breadcrumbs">
            <span>Administrador de Aplicación</span> / <span class="active-crumb">Documentos de Pago</span>
          </div>
        </div>
        <button type="button" class="btn-action-primary">+ Nuevo Documento</button>
      </div>

      <div class="content-body">
        <div class="grid-layout">
        <!-- Panel Izquierdo: Arbol Documentos -->
        <div class="panel tree-panel">
          <div class="panel-header">
            <svg class="panel-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            <h3 class="panel-title">Documentos de Pago</h3>
          </div>

          <div class="search-input-wrap">
            <svg class="search-icon" viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              class="search-field"
              placeholder="Buscar documento..."
              [value]="searchTerm()"
              (input)="onSearchInput($event)"
            />
          </div>

          <div class="tree-container">
            @for (category of filteredCategories(); track category.id) {
              <div class="category-block">
                <div class="category-row" (click)="toggleCategory(category)">
                  <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" class="chevron-icon" [class.rotated]="category.expanded">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <svg class="category-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8">
                    <polyline points="16 3 21 3 21 8"/>
                    <line x1="4" y1="20" x2="21" y2="3"/>
                    <polyline points="21 16 21 21 16 21"/>
                    <line x1="15" y1="15" x2="21" y2="21"/>
                    <line x1="4" y1="4" x2="9" y2="9"/>
                  </svg>
                  <span class="category-name">{{ category.name }}</span>
                </div>

                @if (category.expanded && category.children) {
                  <div class="subitems-list">
                    @for (doc of category.children; track doc.id) {
                      <div
                        class="doc-item-row"
                        [class.selected]="selectedDoc()?.id === doc.id"
                        (click)="selectDocument(doc)"
                      >
                        <svg class="doc-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                        </svg>
                        <span class="doc-name">{{ doc.name }}</span>
                      </div>
                    }
                  </div>
                }
              </div>
            }
          </div>
        </div>

        <!-- Panel Derecho: Detalle o Vacío -->
        <div class="panel detail-panel">
          @if (!selectedDoc()) {
            <div class="empty-detail">
              <div class="empty-icon-wrap">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#94a3b8" stroke-width="1.6">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <p class="empty-msg">Seleccione un documento del árbol para ver el detalle y los requisitos de información.</p>
            </div>
          } @else {
            <div class="detail-content">
              <div class="detail-header">
                <div class="detail-title-wrap">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0284c7" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  <h3 class="detail-title">{{ selectedDoc()?.name }}</h3>
                </div>
                <div class="detail-actions">
                  <button type="button" class="btn-icon" title="Editar">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                  </button>
                  <button type="button" class="btn-icon delete" title="Eliminar">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="form-grid-three">
                <div class="form-group">
                  <label class="field-label">Código</label>
                  <input type="text" class="field-input" [value]="selectedDoc()?.codigo" readonly />
                </div>
                <div class="form-group">
                  <label class="field-label">Nombre</label>
                  <input type="text" class="field-input" [value]="selectedDoc()?.name" readonly />
                </div>
                <div class="form-group">
                  <label class="field-label">Días Pendientes</label>
                  <input type="text" class="field-input" [value]="selectedDoc()?.diasPendientes ?? 0" readonly />
                </div>
              </div>

              <div class="form-grid-two">
                <div class="form-group">
                  <label class="field-label">Tipo Documento</label>
                  <input type="text" class="field-input" [value]="selectedDoc()?.tipoDocumento" readonly />
                </div>
                <div class="form-group">
                  <label class="field-label">Tipo Consolidado</label>
                  <input type="text" class="field-input" [value]="selectedDoc()?.tipoConsolidado ?? 'Ninguno'" readonly />
                </div>
              </div>

              <div class="requirements-section">
                <div class="section-title-wrap">
                  <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" class="check-icon">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="section-title">Requiere información de</span>
                </div>

                <div class="checkbox-row">
                  <label class="check-item">
                    <input type="checkbox" [checked]="selectedDoc()?.requiereInfo?.ciudad" disabled />
                    <span>Ciudad</span>
                  </label>
                  <label class="check-item">
                    <input type="checkbox" [checked]="selectedDoc()?.requiereInfo?.banco" disabled />
                    <span>Banco</span>
                  </label>
                  <label class="check-item">
                    <input type="checkbox" [checked]="selectedDoc()?.requiereInfo?.cliente" disabled />
                    <span>Cliente</span>
                  </label>
                  <label class="check-item">
                    <input type="checkbox" [checked]="selectedDoc()?.requiereInfo?.consignacion" disabled />
                    <span>Consignación</span>
                  </label>
                  <label class="check-item">
                    <input type="checkbox" [checked]="selectedDoc()?.requiereInfo?.fechaVencimiento" disabled />
                    <span>Fecha Vencimiento</span>
                  </label>
                </div>

                <div class="checkbox-row">
                  <label class="check-item">
                    <input type="checkbox" [checked]="selectedDoc()?.requiereInfo?.tarjeta" disabled />
                    <span>Tarjeta</span>
                  </label>
                  <label class="check-item">
                    <input type="checkbox" [checked]="selectedDoc()?.requiereInfo?.autorizacion" disabled />
                    <span>Autorización</span>
                  </label>
                </div>
              </div>
            </div>
          }
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
    .grid-layout {
      display: grid;
      grid-template-columns: 340px 1fr;
      gap: 16px;
      min-height: 440px;
    }
    .panel {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 18px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
      display: flex;
      flex-direction: column;
    }
    .panel-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }
    .panel-icon {
      color: #475569;
    }
    .panel-title {
      font-size: 14px;
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }
    .search-input-wrap {
      position: relative;
      margin-bottom: 12px;
    }
    .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
    }
    .search-field {
      width: 100%;
      height: 36px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 0 12px 0 32px;
      font-size: 13px;
      outline: none;
      box-sizing: border-box;
    }
    .tree-container {
      flex: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .category-row {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 4px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      color: #334155;
      user-select: none;
    }
    .category-row:hover {
      color: #0284c7;
    }
    .chevron-icon {
      color: #64748b;
      transition: transform 0.15s ease;
    }
    .chevron-icon.rotated {
      transform: rotate(90deg);
    }
    .category-icon {
      color: #64748b;
    }
    .subitems-list {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .doc-item-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      color: #334155;
    }
    .doc-item-row:hover {
      background: #f1f5f9;
    }
    .doc-item-row.selected {
      background: #e0f2fe;
      color: #0369a1;
      font-weight: 600;
    }
    .doc-icon {
      color: #64748b;
    }
    .empty-detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      text-align: center;
      padding: 30px;
    }
    .empty-msg {
      font-size: 13px;
      color: #64748b;
      margin: 0;
      max-width: 320px;
      line-height: 1.5;
    }
    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 14px;
      border-bottom: 1px solid #e2e8f0;
      margin-bottom: 18px;
    }
    .detail-title-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .detail-title {
      font-size: 16px;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }
    .detail-actions {
      display: flex;
      gap: 8px;
    }
    .btn-icon {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #475569;
    }
    .btn-icon.delete {
      color: #dc2626;
    }
    .form-grid-three {
      display: grid;
      grid-template-columns: 140px 1fr 140px;
      gap: 14px;
      margin-bottom: 14px;
    }
    .form-grid-two {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-bottom: 22px;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .field-label {
      font-size: 12px;
      font-weight: 600;
      color: #475569;
    }
    .field-input {
      height: 38px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 0 12px;
      font-size: 13px;
      background: #f8fafc;
      color: #1e293b;
      outline: none;
    }
    .requirements-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding-top: 14px;
      border-top: 1px solid #f1f5f9;
    }
    .section-title-wrap {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .check-icon {
      color: #0284c7;
    }
    .section-title {
      font-size: 13px;
      font-weight: 600;
      color: #1e293b;
    }
    .checkbox-row {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    .check-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: #334155;
      cursor: pointer;
    }
  `]
})
export class DocumentosValoresPagoComponent {
  readonly searchTerm = signal('');
  readonly selectedDoc = signal<DocPagoNode | null>(null);

  readonly categories = signal<DocPagoNode[]>([
    {
      id: 'cat-credito',
      name: 'Crédito',
      type: 'category',
      expanded: true,
      children: [
        {
          id: 'doc-002',
          name: 'CONSIGNACION (002)',
          type: 'document',
          codigo: '002',
          diasPendientes: 0,
          tipoDocumento: 'Crédito',
          tipoConsolidado: 'Ninguno',
          requiereInfo: {
            ciudad: false,
            banco: false,
            cliente: false,
            consignacion: false,
            fechaVencimiento: false,
            tarjeta: false,
            autorizacion: false
          }
        },
        {
          id: 'doc-015',
          name: 'Abonos de Clientes (015)',
          type: 'document',
          codigo: '015',
          diasPendientes: 0,
          tipoDocumento: 'Crédito',
          tipoConsolidado: 'Ninguno'
        },
        {
          id: 'doc-cdr',
          name: 'Cons Directa (CDR)',
          type: 'document',
          codigo: 'CDR',
          diasPendientes: 0,
          tipoDocumento: 'Crédito',
          tipoConsolidado: 'Ninguno'
        },
        {
          id: 'doc-chp',
          name: 'Cheque Postf (CHP)',
          type: 'document',
          codigo: 'CHP',
          diasPendientes: 0,
          tipoDocumento: 'Crédito',
          tipoConsolidado: 'Ninguno'
        },
        {
          id: 'doc-tcr',
          name: 'Tarjeta Crédito (TCR)',
          type: 'document',
          codigo: 'TCR',
          diasPendientes: 0,
          tipoDocumento: 'Crédito',
          tipoConsolidado: 'Ninguno'
        }
      ]
    },
    {
      id: 'cat-contado',
      name: 'Contado',
      type: 'category',
      expanded: false,
      children: [
        { id: 'doc-800', name: 'Personas Naturales (800)', type: 'document', codigo: '800', tipoDocumento: 'Contado' },
        { id: 'doc-801', name: 'Personas Jurídicas (801)', type: 'document', codigo: '801', tipoDocumento: 'Contado' },
        { id: 'doc-chq', name: 'Cheque UNO (CHQ)', type: 'document', codigo: 'CHQ', tipoDocumento: 'Contado' },
        { id: 'doc-doc', name: 'Doc. Blanco (DOC)', type: 'document', codigo: 'DOC', tipoDocumento: 'Contado' },
        { id: 'doc-efe', name: 'Efectivo (EFE)', type: 'document', codigo: 'EFE', tipoDocumento: 'Contado' }
      ]
    }
  ]);

  readonly filteredCategories = computed(() => {
    const q = this.searchTerm().trim().toLowerCase();
    if (!q) return this.categories();
    return this.categories().map(cat => ({
      ...cat,
      children: cat.children?.filter(d => d.name.toLowerCase().includes(q))
    }));
  });

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }

  toggleCategory(category: DocPagoNode): void {
    category.expanded = !category.expanded;
  }

  selectDocument(doc: DocPagoNode): void {
    this.selectedDoc.set(doc);
  }
}
