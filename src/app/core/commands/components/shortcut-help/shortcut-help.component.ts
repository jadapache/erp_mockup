import { Component, computed, inject } from '@angular/core';
import {
  injectAppHotkeyList,
  injectFormatForDisplay,
  injectHotkeyRegistrations,
  injectHotkey
} from '@tanstack/angular-hotkeys';
import { CoreCommandsService } from '../../core-commands.service';
import { CommandContextService } from '../../command-context.service';
import { MdiWindowService } from '../../../mdi/services/mdi-window.service';
import { MENU_MODULES } from '../../../mdi/menu-data';
import { MenuModule } from '../../../mdi/models/menu.model';

interface HelpGroup {
  name: string;
  items: Array<{
    id: string;
    name: string;
    description: string;
    shortcut: string;
    status: string;
  }>;
}

@Component({
  selector: 'app-shortcut-help',
  standalone: true,
  templateUrl: './shortcut-help.component.html',
  styleUrl: './shortcut-help.component.css'
})
export class ShortcutHelpComponent {
  readonly coreCommands = inject(CoreCommandsService);
  readonly cmdContext = inject(CommandContextService);
  readonly mdi = inject(MdiWindowService);
  readonly appHotkeyList = injectAppHotkeyList();
  readonly formatForDisplay = injectFormatForDisplay();
  readonly registrations = injectHotkeyRegistrations();

  constructor() {
    injectHotkey('Escape', () => this.coreCommands.closeHelp());
  }

  readonly currentModuleName = computed<string>(() => {
    const code = this.cmdContext.activeModuleCode();
    const mod = MENU_MODULES.find((m: MenuModule) => m.code === code);
    return mod?.name ?? 'Módulo Actual';
  });

  readonly groups = computed<HelpGroup[]>(() => {
    const list = this.appHotkeyList();
    const globalItems: HelpGroup['items'] = [];

    // 1. Atajos globales
    for (const item of list) {
      const appHotkey = item.appHotkey;
      const meta = appHotkey.meta;
      const formattedKey = appHotkey.hotkey ? this.formatForDisplay(appHotkey.hotkey) : 'Sin atajo asignado';
      globalItems.push({
        id: appHotkey.id,
        name: meta?.name ?? appHotkey.id,
        description: meta?.description ?? '',
        shortcut: formattedKey,
        status: item.status
      });
    }

    const moduleItems: HelpGroup['items'] = [];
    const windowItems: HelpGroup['items'] = [];
    const componentItems: HelpGroup['items'] = [];
    const internalKeys = new Set(['Escape']);

    for (const reg of this.registrations()) {
      const options = reg.options;
      const hotkeyStr = typeof reg.hotkey === 'string' ? reg.hotkey : '';
      const formattedKey = reg.hotkey ? this.formatForDisplay(reg.hotkey) : '';

      if (
        ('appHotkeyId' in options && options.appHotkeyId) ||
        internalKeys.has(hotkeyStr) ||
        internalKeys.has(formattedKey) ||
        reg.status !== 'active'
      ) {
        continue;
      }

      const meta = options.meta;
      const name = meta?.name ?? (hotkeyStr || 'Atajo');
      const category = meta?.category;
      const helpItem = {
        id: `${name}-${formattedKey}`,
        name,
        description: meta?.description ?? '',
        shortcut: formattedKey,
        status: reg.status
      };

      if (category === 'Módulo') {
        moduleItems.push(helpItem);
      } else if (category === 'Ventanas' || options.scope === 'window') {
        windowItems.push(helpItem);
      } else if (options.scope === 'component') {
        componentItems.push(helpItem);
      } else {
        windowItems.push(helpItem);
      }
    }

    const result: HelpGroup[] = [
      { name: '1. ATAJOS GLOBALES', items: globalItems }
    ];

    const activeModHeader = `2. MÓDULO ACTIVO: ${this.currentModuleName().toUpperCase()}`;
    result.push({
      name: activeModHeader,
      items: moduleItems.length > 0 ? moduleItems : [
        {
          id: 'no-mod-shortcuts',
          name: 'Sin atajos específicos de módulo',
          description: 'No hay procesos de módulo con atajo directo activo',
          shortcut: '',
          status: 'inactive'
        }
      ]
    });

    const activeWindow = this.mdi.activeWindow();
    const activeWinHeader = activeWindow
      ? `3. VENTANA ACTIVA: ${activeWindow.title.toUpperCase()}`
      : '3. VENTANA ACTIVA';

    result.push({
      name: activeWinHeader,
      items: windowItems.length > 0 ? windowItems : [
        {
          id: 'no-win-shortcuts',
          name: 'Sin ventana activa o sin atajos de ventana',
          description: 'Abra una ventana para consultar sus atajos de formulario o tabla',
          shortcut: '',
          status: 'inactive'
        }
      ]
    });

    if (componentItems.length > 0) {
      result.push({
        name: '4. COMPONENTE ENFOCADO',
        items: componentItems
      });
    }

    return result;
  });

  close(): void {
    this.coreCommands.closeHelp();
  }
}


