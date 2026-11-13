import { Component, signal, computed } from '@angular/core';

interface GeoNode {
  id: string;
  name: string;
  type: 'country' | 'state' | 'city';
  code?: string;
  expanded?: boolean;
  children?: GeoNode[];
}

@Component({
  selector: 'app-division-politica',
  standalone: true,
  template: `
    <div class="page-container">
      <div class="page-header">
        <div class="header-left">
          <h2 class="page-title">División Política Internacional</h2>
          <div class="breadcrumbs">
            <span>Adm. Plataforma</span> / <span class="active-crumb">División Política</span>
          </div>
        </div>
        <button type="button" class="btn-action-primary">+ Nuevo</button>
      </div>

      <div class="content-body">
        <div class="grid-layout">
        <!-- Panel Izquierdo: Árbol -->
        <div class="panel tree-panel">
          <div class="panel-header">
            <svg class="panel-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <h3 class="panel-title">Estructura geográfica</h3>
          </div>

          <div class="search-input-wrap">
            <svg class="search-icon" viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              class="search-field"
              placeholder="Buscar ubicación..."
              [value]="searchTerm()"
              (input)="onSearchInput($event)"
            />
          </div>

          <div class="tree-container">
            @for (country of filteredNodes(); track country.id) {
              <div class="tree-node country-node">
                <div
                  class="node-row"
                  [class.selected]="selectedNode()?.id === country.id"
                  (click)="selectNode(country)"
                >
                  <button type="button" class="expand-btn" (click)="toggleExpand(country, $event)">
                    <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" [class.rotated]="country.expanded">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </button>
                  <svg class="node-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <span class="node-label">{{ country.name }}</span>
                </div>

                @if (country.expanded && country.children) {
                  <div class="tree-subgroup">
                    @for (state of country.children; track state.id) {
                      <div class="tree-node state-node">
                        <div
                          class="node-row"
                          [class.selected]="selectedNode()?.id === state.id"
                          (click)="selectNode(state)"
                        >
                          <button type="button" class="expand-btn" (click)="toggleExpand(state, $event)">
                            <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor" [class.rotated]="state.expanded">
                              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                            </svg>
                          </button>
                          <svg class="node-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <line x1="9" y1="3" x2="9" y2="21"/>
                          </svg>
                          <span class="node-label">{{ state.name }}</span>
                        </div>

                        @if (state.expanded && state.children) {
                          <div class="tree-subgroup">
                            @for (city of state.children; track city.id) {
                              <div
                                class="node-row city-node"
                                [class.selected]="selectedNode()?.id === city.id"
                                (click)="selectNode(city)"
                              >
                                <svg class="node-icon dot" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                  <circle cx="12" cy="12" r="4"/>
                                </svg>
                                <span class="node-label">{{ city.name }}</span>
                              </div>
                            }
                          </div>
                        }
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
          @if (!selectedNode()) {
            <div class="empty-detail">
              <div class="empty-icon-wrap">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#94a3b8" stroke-width="1.6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <p class="empty-msg">Seleccione un nodo del árbol para ver o editar su detalle.</p>
            </div>
          } @else {
            <div class="detail-content">
              <div class="detail-header">
                <div class="detail-title-wrap">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0284c7" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <h3 class="detail-title">{{ selectedNode()?.name }}</h3>
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

              <div class="form-grid">
                <div class="form-group">
                  <label class="field-label">Código</label>
                  <input type="text" class="field-input" [value]="selectedNode()?.code ?? 'N/A'" readonly />
                </div>
                <div class="form-group">
                  <label class="field-label">Nombre</label>
                  <input type="text" class="field-input" [value]="selectedNode()?.name" readonly />
                </div>
                <div class="form-group">
                  <label class="field-label">Nivel de división</label>
                  <input
                    type="text"
                    class="field-input"
                    [value]="selectedNode()?.type === 'country' ? 'País' : selectedNode()?.type === 'state' ? 'Estado / Departamento' : 'Ciudad / Municipio'"
                    readonly
                  />
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
      flex: 1;
      min-height: 420px;
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
      gap: 4px;
    }
    .node-row {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 8px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 13px;
      color: #334155;
    }
    .node-row:hover {
      background: #f1f5f9;
    }
    .node-row.selected {
      background: #e0f2fe;
      color: #0369a1;
      font-weight: 600;
    }
    .expand-btn {
      background: transparent;
      border: none;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #64748b;
    }
    .expand-btn svg.rotated {
      transform: rotate(90deg);
    }
    .node-icon {
      color: #64748b;
    }
    .tree-subgroup {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .empty-detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
    .empty-msg {
      font-size: 13px;
      color: #64748b;
      margin: 0;
    }
    .detail-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 14px;
      border-bottom: 1px solid #e2e8f0;
      margin-bottom: 16px;
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
    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
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
  `]
})
export class DivisionPoliticaComponent {
  readonly searchTerm = signal('');
  readonly selectedNode = signal<GeoNode | null>(null);

  readonly treeData = signal<GeoNode[]>([
    {
      id: 'usa',
      name: 'ESTADOS UNIDOS',
      type: 'country',
      code: 'USA',
      expanded: true,
      children: [
        { id: 'geo', name: 'GEORGIA', type: 'state', code: 'GA', expanded: false },
        { id: 'min', name: 'MINESOTA', type: 'state', code: 'MN', expanded: false },
        { id: 'ohio', name: 'OHIO', type: 'state', code: 'OH', expanded: false },
        { id: 'col', name: 'COLORADO', type: 'state', code: 'CO', expanded: false },
        { id: 'ill', name: 'ILLINOIS', type: 'state', code: 'IL', expanded: false },
        { id: 'tex', name: 'TEXAS', type: 'state', code: 'TX', expanded: false },
        { id: 'det', name: 'DETROIT', type: 'state', code: 'MI-DET', expanded: false },
        { id: 'flo', name: 'FLORIDA', type: 'state', code: 'FL', expanded: false }
      ]
    }
  ]);

  readonly filteredNodes = computed(() => {
    const q = this.searchTerm().trim().toLowerCase();
    if (!q) return this.treeData();
    return this.treeData().map(c => ({
      ...c,
      children: c.children?.filter(st => st.name.toLowerCase().includes(q))
    }));
  });

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }

  toggleExpand(node: GeoNode, event: MouseEvent): void {
    event.stopPropagation();
    node.expanded = !node.expanded;
  }

  selectNode(node: GeoNode): void {
    this.selectedNode.set(node);
  }
}
