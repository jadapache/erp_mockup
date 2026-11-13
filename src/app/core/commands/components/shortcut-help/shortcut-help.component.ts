import { Component, computed, inject } from '@angular/core';
import {
  injectAppHotkeyList,
  injectFormatForDisplay,
  injectHotkeyRegistrations,
  injectHotkey
} from '@tanstack/angular-hotkeys';
import { CoreCommandsService } from '../../core-commands.service';
import { CommandContextService } from '../../command-context.service';
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
    const systemItems: HelpGroup['items'] = [];

    // Comandos Generales del Sistema
    for (const item of list) {
      const appHotkey = item.appHotkey;
      const meta = appHotkey.meta;
      const formattedKey = appHotkey.hotkey ? this.formatForDisplay(appHotkey.hotkey) : 'Sin atajo asignado';
      systemItems.push({
        id: appHotkey.id,
        name: meta?.name ?? appHotkey.id,
        description: meta?.description ?? '',
        shortcut: formattedKey,
        status: item.status
      });
    }

    // Comandos contextuales por módulo y ventanas actualmente activas
    const moduleItems: HelpGroup['items'] = [];
    const internalKeys = new Set(['Escape', 'Ctrl+F4']);

    for (const reg of this.registrations()) {
      const options = reg.options;
      const hotkeyStr = typeof reg.hotkey === 'string' ? reg.hotkey : '';
      
      if (('appHotkeyId' in options && options.appHotkeyId) || internalKeys.has(hotkeyStr)) {
        continue;
      }

      const meta = options.meta;
      const formattedKey = reg.hotkey ? this.formatForDisplay(reg.hotkey) : '';
      const name = meta?.name ?? (hotkeyStr || 'Atajo de ventana');
      
      moduleItems.push({
        id: `${name}-${formattedKey}`,
        name,
        description: meta?.description ?? (options.scope ? `Alcance: ${options.scope}` : ''),
        shortcut: formattedKey,
        status: reg.status
      });
    }

    const result: HelpGroup[] = [
      { name: 'Comandos Generales del Sistema', items: systemItems }
    ];

    const activeModHeader = `Comandos del Módulo Activo: ${this.currentModuleName()}`;
    if (moduleItems.length > 0) {
      result.push({ name: activeModHeader, items: moduleItems });
    } else {
      result.push({
        name: activeModHeader,
        items: [
          {
            id: 'no-commands',
            name: 'Sin atajos específicos registrados',
            description: 'Abra una ventana del módulo para ver sus atajos contextuales.',
            shortcut: '',
            status: 'inactive'
          }
        ]
      });
    }

    return result;
  });

  close(): void {
    this.coreCommands.closeHelp();
  }
}


