import { Injectable, signal, computed } from '@angular/core';
import { UiContext } from './models/app-command.model';

export interface CommandContextState {
  activeModuleCode: string;
  activeWindowId: string | null;
  activeDialogId: string | null;
  focusedComponentId: string | null;
  hasSelection: boolean;
  selectedText: string;
  formStatus: 'clean' | 'dirty' | 'saving' | 'readonly';
  userPermissions: string[];
}

@Injectable({ providedIn: 'root' })
export class CommandContextService {
  private readonly state = signal<CommandContextState>({
    activeModuleCode: 'adm',
    activeWindowId: null,
    activeDialogId: null,
    focusedComponentId: null,
    hasSelection: false,
    selectedText: '',
    formStatus: 'clean',
    userPermissions: ['*']
  });

  readonly activeModuleCode = computed(() => this.state().activeModuleCode);
  readonly activeWindowId = computed(() => this.state().activeWindowId);
  readonly activeDialogId = computed(() => this.state().activeDialogId);
  readonly isDialogActive = computed(() => this.state().activeDialogId !== null);
  readonly focusedComponentId = computed(() => this.state().focusedComponentId);
  readonly hasSelection = computed(() => this.state().hasSelection);
  readonly formStatus = computed(() => this.state().formStatus);

  readonly currentContext = computed<UiContext>(() => ({
    activeModuleCode: this.state().activeModuleCode,
    activeWindowId: this.state().activeWindowId,
    activeDialogId: this.state().activeDialogId,
    focusedComponentId: this.state().focusedComponentId,
    hasSelection: this.state().hasSelection,
    selectedText: this.state().selectedText,
    formStatus: this.state().formStatus,
    userPermissions: this.state().userPermissions
  }));

  setActiveModule(moduleCode: string): void {
    this.state.update(s => ({ ...s, activeModuleCode: moduleCode }));
  }

  setActiveWindow(windowId: string | null): void {
    this.state.update(s => ({ ...s, activeWindowId: windowId }));
  }

  setFocusedComponent(componentId: string | null): void {
    this.state.update(s => ({ ...s, focusedComponentId: componentId }));
  }

  setSelection(hasSelection: boolean, text: string = ''): void {
    this.state.update(s => ({ ...s, hasSelection, selectedText: text }));
  }

  setFormStatus(status: 'clean' | 'dirty' | 'saving' | 'readonly'): void {
    this.state.update(s => ({ ...s, formStatus: status }));
  }

  openDialog(dialogId: string): void {
    this.state.update(s => ({ ...s, activeDialogId: dialogId }));
  }

  closeDialog(dialogId: string): void {
    this.state.update(s => (s.activeDialogId === dialogId ? { ...s, activeDialogId: null } : s));
  }
}
