export type CommandScope =
  | 'global'
  | 'module'
  | 'window'
  | 'component'
  | 'dialog';

export type CommandSurface =
  | 'toolbar'
  | 'module-menu'
  | 'edit-menu'
  | 'context-menu'
  | 'shortcut-catalog';

export interface UiContext {
  activeModuleCode?: string;
  activeWindowId?: string | null;
  activeDialogId?: string | null;
  focusedComponentId?: string | null;
  hasSelection?: boolean;
  selectedText?: string;
  formStatus?: 'clean' | 'dirty' | 'saving' | 'readonly';
  userPermissions?: string[];
}

export interface UiCommand {
  id: string;
  label: string;
  description?: string;
  shortcut?: string;
  scope: CommandScope;
  moduleId?: string;
  windowId?: string;
  componentId?: string;
  surfaces: CommandSurface[];
  isVisible?: (context: UiContext) => boolean;
  isEnabled?: (context: UiContext) => boolean;
  execute: (context: UiContext) => void | Promise<void>;
}

export interface AppCommand {
  id: string;
  label: string;
  description?: string;
  shortcut?: string;
  category?: 'Sistema' | 'Ventanas' | 'Módulo' | 'Diálogos';
  scope?: CommandScope;
  moduleCode?: string;
  windowId?: string;
  enabled?: () => boolean;
  execute: () => void | Promise<void>;
}

export interface RefreshableForm {
  refreshView?: () => void | Promise<void>;
  hasUnsavedChanges?: () => boolean;
}
