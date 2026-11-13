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
  templateUrl: './documentos-valores-pago.component.html',
  styleUrls: ['./documentos-valores-pago.component.css']
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
