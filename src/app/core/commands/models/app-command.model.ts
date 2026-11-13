export type CommandScope =
  | 'global'
  | 'module'
  | 'window'
  | 'dialog';

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
