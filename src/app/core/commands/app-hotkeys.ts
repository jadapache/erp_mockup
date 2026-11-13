import { defineAppHotkeys } from '@tanstack/angular-hotkeys';

declare module '@tanstack/hotkeys' {
  interface HotkeyMeta {
    category?: 'Sistema' | 'Ventanas' | 'Módulo' | 'Diálogos';
  }
}

export const appHotkeys = defineAppHotkeys({
  'system.search': {
    hotkey: 'Control+B',
    meta: {
      name: 'Buscar en el sistema',
      description: 'Abrir el buscador global del sistema',
      category: 'Sistema'
    }
  },
  'system.refresh': {
    hotkey: 'F5',
    meta: {
      name: 'Refrescar vista',
      description: 'Refrescar la vista activa sin recargar el navegador',
      category: 'Sistema'
    }
  },
  'system.help': {
    hotkey: 'F1',
    meta: {
      name: 'Ayuda de atajos',
      description: 'Abrir el catálogo de comandos y atajos de teclado',
      category: 'Sistema'
    }
  },
  'mdi.close': {
    hotkey: 'Alt+W',
    meta: {
      name: 'Cerrar ventana MDI activa',
      description: 'Cerrar la ventana MDI que tiene el foco actualmente (Alt+W)',
      category: 'Ventanas'
    }
  },
  'mdi.nextWindow': {
    hotkey: 'Alt+T',
    meta: {
      name: 'Siguiente ventana MDI',
      description: 'Activar la siguiente ventana MDI disponible',
      category: 'Ventanas'
    }
  }
});

declare module '@tanstack/angular-hotkeys' {
  interface Register {
    appHotkeys: typeof appHotkeys;
  }
}

