import { Injectable, signal } from '@angular/core';
import { DivisionPoliticaItem, DivisionPoliticaFormData, NivelDivision } from '../models/division-politica.model';
import rawData from '../data/division-politica.json';

const STORAGE_KEY = 'erp_division_politica_data';

@Injectable({
  providedIn: 'root'
})
export class DivisionPoliticaService {
  private readonly _items = signal<DivisionPoliticaItem[]>(this.initializeData());
  readonly items = this._items.asReadonly();

  private initializeData(): DivisionPoliticaItem[] {
    const stored = this.readFromStorage();
    if (stored && Array.isArray(stored) && stored.length > 0) {
      return this.cloneNodes(stored);
    }
    const raw = rawData as DivisionPoliticaItem[];
    const cloned = this.cloneNodes(raw);
    this.persistToStorage(cloned);
    return cloned;
  }

  private readFromStorage(): DivisionPoliticaItem[] | null {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return null;
      const dataStr = localStorage.getItem(STORAGE_KEY);
      return dataStr ? (JSON.parse(dataStr) as DivisionPoliticaItem[]) : null;
    } catch {
      return null;
    }
  }

  private persistToStorage(data: DivisionPoliticaItem[]): void {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Ignore quota/security storage errors
    }
  }

  private cloneNodes(nodes: DivisionPoliticaItem[]): DivisionPoliticaItem[] {
    return nodes.map(node => ({
      ...node,
      hijos: node.hijos ? this.cloneNodes(node.hijos) : []
    }));
  }

  saveItem(item: DivisionPoliticaFormData, isEditing: boolean, parentCode?: string): boolean {
    const current = this.cloneNodes(this._items());

    if (isEditing) {
      const existing = this.findNodeByCode(current, item.codigo);
      if (!existing) return false;
      this.updateExistingNode(existing, item);
      this.commitChanges(current);
      return true;
    }

    const inserted = this.insertNewNode(current, item, parentCode);
    if (inserted) {
      this.commitChanges(current);
      return true;
    }
    return false;
  }

  private commitChanges(tree: DivisionPoliticaItem[]): void {
    this._items.set(tree);
    this.persistToStorage(tree);
  }

  private updateExistingNode(target: DivisionPoliticaItem, data: DivisionPoliticaFormData): void {
    target.nombre = data.nombre.trim();
    target.iso = data.iso?.trim();
    target.isoRips = data.isoRips?.trim();
    target.ripsNum = data.ripsNum?.trim();
    target.indicativo = data.indicativo?.trim();
    target.tipoImpuesto = data.tipoImpuesto?.trim();
    target.codigoDestino = data.codigoDestino?.trim();
  }

  private insertNewNode(
    tree: DivisionPoliticaItem[],
    data: DivisionPoliticaFormData,
    parentCode?: string
  ): boolean {
    const newNode: DivisionPoliticaItem = {
      codigo: data.codigo.trim(),
      nombre: data.nombre.trim(),
      nivel: data.nivel,
      iso: data.iso?.trim(),
      isoRips: data.isoRips?.trim(),
      ripsNum: data.ripsNum?.trim(),
      indicativo: data.indicativo?.trim(),
      tipoImpuesto: data.tipoImpuesto?.trim(),
      codigoDestino: data.codigoDestino?.trim(),
      hijos: []
    };

    if (!parentCode || data.nivel === 'PAIS') {
      tree.push(newNode);
      return true;
    }

    const parent = this.findNodeByCode(tree, parentCode);
    if (parent) {
      if (!parent.hijos) {
        parent.hijos = [];
      }
      parent.hijos.push(newNode);
      parent.expanded = true;
      return true;
    }

    return false;
  }

  deleteItem(codigo: string): boolean {
    const current = this.cloneNodes(this._items());
    const deleted = this.removeNodeFromList(current, codigo);
    if (deleted) {
      this.commitChanges(current);
      return true;
    }
    return false;
  }

  private removeNodeFromList(list: DivisionPoliticaItem[], code: string): boolean {
    const idx = list.findIndex(n => n.codigo === code);
    if (idx !== -1) {
      list.splice(idx, 1);
      return true;
    }

    for (const item of list) {
      if (item.hijos && item.hijos.length > 0) {
        const removed = this.removeNodeFromList(item.hijos, code);
        if (removed) return true;
      }
    }
    return false;
  }

  findNodeByCode(nodes: DivisionPoliticaItem[], code: string): DivisionPoliticaItem | null {
    const normalized = code.trim();
    for (const node of nodes) {
      if (node.codigo === normalized) return node;
      if (node.hijos && node.hijos.length > 0) {
        const found = this.findNodeByCode(node.hijos, normalized);
        if (found) return found;
      }
    }
    return null;
  }
}
