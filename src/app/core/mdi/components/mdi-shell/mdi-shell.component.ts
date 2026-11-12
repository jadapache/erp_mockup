import { Component, ElementRef, computed, inject, signal, viewChild } from '@angular/core';
import { MdiWindowService } from '../../services/mdi-window.service';
import { MdiWindowComponent } from '../mdi-window/mdi-window.component';
import { getOrCreateForm } from '../../mdi-registry';
import { MENU_MODULES } from '../../menu-data';
import { MenuModule, MenuItem } from '../../models/menu.model';
import { InicioViewComponent } from '../inicio-view.component';
import { MenuNodeComponent } from '../menu-node/menu-node.component';

@Component({
  selector: 'app-mdi-shell',
  standalone: true,
  imports: [MdiWindowComponent, InicioViewComponent, MenuNodeComponent],
  templateUrl: './mdi-shell.component.html',
  styleUrl: './mdi-shell.component.css'
})
export class MdiShellComponent {
  readonly mdi = inject(MdiWindowService);
  readonly windows = this.mdi.windows;
  readonly workspaceRef = viewChild<ElementRef<HTMLElement>>('workspace');

  readonly allModules: MenuModule[] = MENU_MODULES;
  readonly selectedModuleCode = signal<string>('adm');
  readonly sidebarCollapsed = signal<boolean>(false);
  readonly searchQuery = signal<string>('');

  readonly currentModule = computed<MenuModule>(() => {
    const code = this.selectedModuleCode();
    return this.allModules.find((m: MenuModule) => m.code === code) ?? this.allModules[0];
  });

  readonly filteredItems = computed<MenuItem[]>(() => {
    const q = this.searchQuery().trim().toLowerCase();
    const items = this.currentModule()?.items ?? [];
    if (!q) return items;
    return this.filterTree(items, q);
  });

  constructor() {
    this.openFormById('asociarProductos', 'Asociar Productos a Contratos');
  }

  toggleSidebar(): void {
    this.sidebarCollapsed.update(v => !v);
  }

  selectModule(code: string): void {
    this.selectedModuleCode.set(code);
    this.searchQuery.set('');
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  openMenuItem(item: MenuItem): void {
    this.openFormById(item.id, item.name);
  }

  openFormById(id: string, defaultTitle: string): void {
    const formDef = getOrCreateForm(id, defaultTitle, this.currentModule().name);
    this.mdi.open(formDef.title, formDef.component, formDef.width, formDef.height);
  }

  cascadeWindows(): void {
    this.mdi.cascade();
  }

  tileHorizontal(): void {
    const el = this.workspaceRef()?.nativeElement;
    const w = el ? el.clientWidth : window.innerWidth - 300;
    const h = el ? el.clientHeight : window.innerHeight - 90;
    this.mdi.tileHorizontal(w, h);
  }

  tileVertical(): void {
    const el = this.workspaceRef()?.nativeElement;
    const w = el ? el.clientWidth : window.innerWidth - 300;
    const h = el ? el.clientHeight : window.innerHeight - 90;
    this.mdi.tileVertical(w, h);
  }

  private filterTree(nodes: MenuItem[], query: string): MenuItem[] {
    const result: MenuItem[] = [];
    for (const node of nodes) {
      const matchSelf = node.name.toLowerCase().includes(query);
      const filteredChildren = node.children ? this.filterTree(node.children, query) : [];
      if (matchSelf || filteredChildren.length > 0) {
        result.push({
          ...node,
          children: filteredChildren.length > 0 ? filteredChildren : node.children
        });
      }
    }
    return result;
  }
}
