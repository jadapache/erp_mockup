import {
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { injectAppHotkeys, injectHotkey } from '@tanstack/angular-hotkeys';
import { MdiWindowService } from '../../services/mdi-window.service';
import { MdiWindowComponent, DragPositionPayload } from '../mdi-window/mdi-window.component';
import { getOrCreateForm } from '../../mdi-registry';
import { MENU_MODULES } from '../../menu-data';
import { MenuModule, MenuItem } from '../../models/menu.model';
import { InicioViewComponent } from '../inicio-view.component';
import { MenuNodeComponent } from '../menu-node/menu-node.component';
import { CoreCommandsService } from '../../../commands/core-commands.service';
import { CommandContextService } from '../../../commands/command-context.service';
import { ShortcutHelpComponent } from '../../../commands/components/shortcut-help/shortcut-help.component';

@Component({
  selector: 'app-mdi-shell',
  standalone: true,
  imports: [MdiWindowComponent, InicioViewComponent, MenuNodeComponent, ShortcutHelpComponent],
  templateUrl: './mdi-shell.component.html',
  styleUrl: './mdi-shell.component.css'
})
export class MdiShellComponent implements AfterViewInit, OnDestroy {
  readonly mdi = inject(MdiWindowService);
  readonly coreCommands = inject(CoreCommandsService);
  readonly cmdContext = inject(CommandContextService);
  readonly appHotkeys = injectAppHotkeys();

  readonly windows = this.mdi.windows;
  readonly dockState = this.mdi.dockState;
  readonly dockPreview = this.mdi.dockPreview;
  readonly workspaceRef = viewChild<ElementRef<HTMLElement>>('workspace');
  readonly searchInputRef = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  readonly allModules: MenuModule[] = MENU_MODULES;
  readonly selectedModuleCode = signal<string>('adm');
  readonly sidebarCollapsed = signal<boolean>(false);
  readonly searchQuery = signal<string>('');
  readonly workspaceWidth = signal<number>(1200);
  readonly workspaceHeight = signal<number>(800);

  private resizeObserver?: ResizeObserver;
  private isResizingSplitter = false;

  constructor() {
    // Registro de comandos globales del Core mediante injectHotkey y appHotkeys
    injectHotkey(
      () => this.appHotkeys()['system.search'],
      () => this.focusGlobalSearch()
    );

    injectHotkey(
      () => this.appHotkeys()['system.refresh'],
      () => this.coreCommands.refreshActiveView()
    );

    injectHotkey(
      () => this.appHotkeys()['system.help'],
      () => this.coreCommands.toggleHelp()
    );

    injectHotkey(
      () => this.appHotkeys()['mdi.close'],
      () => this.coreCommands.closeActiveWindow()
    );

    // Atajo complementario Control+F4 con preventDefault explícito
    injectHotkey(
      'Control+F4',
      (event) => {
        event.preventDefault();
        this.coreCommands.closeActiveWindow();
      },
      { preventDefault: 'always' }
    );

    injectHotkey(
      () => this.appHotkeys()['mdi.nextWindow'],
      () => this.coreCommands.activateNextWindow()
    );
  }

  focusGlobalSearch(): void {
    const input = this.searchInputRef()?.nativeElement;
    if (input) {
      input.focus();
      input.select();
    }
  }

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

  readonly splitterStyle = computed(() => {
    const dock = this.dockState();
    if (!dock || !dock.secondWindowId) return null;

    const el = this.workspaceRef()?.nativeElement;
    const totalW = el ? el.clientWidth : 1200;
    const totalH = el ? el.clientHeight : 800;

    const left = Math.round(totalW * dock.ratio);
    return {
      left: `${left - 4}px`,
      top: '0px',
      width: '8px',
      height: `${totalH}px`,
      cursor: 'col-resize'
    };
  });

  ngAfterViewInit(): void {
    this.updateWorkspaceDimensions();
    const el = this.workspaceRef()?.nativeElement;
    if (el && typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.updateWorkspaceDimensions();
      });
      this.resizeObserver.observe(el);
    }
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  toggleSidebar(): void {
    this.sidebarCollapsed.update(v => !v);
  }

  selectModule(code: string): void {
    this.selectedModuleCode.set(code);
    this.cmdContext.setActiveModule(code);
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
    const el = this.workspaceRef()?.nativeElement;
    const win = typeof window !== 'undefined' ? window : null;
    const maxW = el ? Math.max(360, el.clientWidth - 40) : (win ? win.innerWidth - 340 : 1200);
    const maxH = el ? Math.max(260, el.clientHeight - 40) : (win ? win.innerHeight - 140 : 800);
    const targetW = Math.min(formDef.width, maxW);
    const targetH = Math.min(formDef.height, maxH);
    this.mdi.open(formDef.title, formDef.component, targetW, targetH, formDef.id);
  }

  cascadeWindows(): void {
    this.mdi.cascade();
  }

  tileHorizontal(): void {
    const el = this.workspaceRef()?.nativeElement;
    const win = typeof window !== 'undefined' ? window : null;
    const w = el ? el.clientWidth : (win ? win.innerWidth - 300 : 1000);
    const h = el ? el.clientHeight : (win ? win.innerHeight - 90 : 700);
    this.mdi.tileHorizontal(w, h);
  }

  tileVertical(): void {
    const el = this.workspaceRef()?.nativeElement;
    const win = typeof window !== 'undefined' ? window : null;
    const w = el ? el.clientWidth : (win ? win.innerWidth - 300 : 1000);
    const h = el ? el.clientHeight : (win ? win.innerHeight - 90 : 700);
    this.mdi.tileVertical(w, h);
  }

  onWindowDragStart(id: string): void {
    this.mdi.onDragStart(id);
  }

  onWindowDragMove(payload: DragPositionPayload): void {
    this.mdi.onDragMove(payload.id, payload);
  }

  onWindowDragEnd(payload: DragPositionPayload): void {
    this.mdi.onDragEnd(payload.id, payload);
  }

  onSplitterMouseDown(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const dock = this.dockState();
    const el = this.workspaceRef()?.nativeElement;
    if (!dock || !dock.secondWindowId || !el) return;

    this.isResizingSplitter = true;
    const rect = el.getBoundingClientRect();

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!this.isResizingSplitter) return;
      const ratio = (moveEvent.clientX - rect.left) / rect.width;
      this.mdi.setSplitRatio(ratio);
    };

    const onMouseUp = () => {
      this.isResizingSplitter = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  private updateWorkspaceDimensions(): void {
    const el = this.workspaceRef()?.nativeElement;
    if (!el) return;
    this.workspaceWidth.set(el.clientWidth);
    this.workspaceHeight.set(el.clientHeight);
    this.mdi.setWorkspaceRect({
      width: el.clientWidth,
      height: el.clientHeight
    });
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
