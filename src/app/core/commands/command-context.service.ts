import { Injectable, signal, computed } from '@angular/core';

export interface CommandContextState {
  activeModuleCode: string;
  activeWindowId: string | null;
  activeDialogId: string | null;
}

@Injectable({ providedIn: 'root' })
export class CommandContextService {
  private readonly state = signal<CommandContextState>({
    activeModuleCode: 'adm',
    activeWindowId: null,
    activeDialogId: null
  });

  readonly activeModuleCode = computed(() => this.state().activeModuleCode);
  readonly activeWindowId = computed(() => this.state().activeWindowId);
  readonly activeDialogId = computed(() => this.state().activeDialogId);
  readonly isDialogActive = computed(() => this.state().activeDialogId !== null);

  setActiveModule(moduleCode: string): void {
    this.state.update(s => ({ ...s, activeModuleCode: moduleCode }));
  }

  setActiveWindow(windowId: string | null): void {
    this.state.update(s => ({ ...s, activeWindowId: windowId }));
  }

  openDialog(dialogId: string): void {
    this.state.update(s => ({ ...s, activeDialogId: dialogId }));
  }

  closeDialog(dialogId: string): void {
    this.state.update(s => (s.activeDialogId === dialogId ? { ...s, activeDialogId: null } : s));
  }
}
