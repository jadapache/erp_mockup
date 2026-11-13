import { Injectable, inject, signal } from '@angular/core';
import { MdiWindowService } from '../mdi/services/mdi-window.service';
import { RefreshableForm } from './models/app-command.model';

@Injectable({ providedIn: 'root' })
export class CoreCommandsService {
  private readonly mdi = inject(MdiWindowService);

  readonly isHelpModalOpen = signal(false);
  readonly isSearchModalOpen = signal(false);
  readonly lastRefreshNotification = signal<string | null>(null);

  private readonly refreshableForms = new Map<string, RefreshableForm>();

  registerRefreshable(windowId: string, form: RefreshableForm): () => void {
    this.refreshableForms.set(windowId, form);
    return () => this.refreshableForms.delete(windowId);
  }

  openSearch(): void {
    this.isSearchModalOpen.set(true);
  }

  closeSearch(): void {
    this.isSearchModalOpen.set(false);
  }

  openHelp(): void {
    this.isHelpModalOpen.set(true);
  }

  closeHelp(): void {
    this.isHelpModalOpen.set(false);
  }

  toggleHelp(): void {
    this.isHelpModalOpen.update(v => !v);
  }

  refreshActiveView(): void {
    const active = this.mdi.activeWindow();
    if (!active) {
      this.notifyRefresh('No hay ventana activa para refrescar');
      return;
    }

    const form = this.refreshableForms.get(active.id);
    if (!form || !form.refreshView) {
      this.notifyRefresh(`Vista "${active.title}" refrescada`);
      return;
    }

    if (form.hasUnsavedChanges && form.hasUnsavedChanges()) {
      const confirmDiscard = typeof window !== 'undefined'
        ? window.confirm('Hay cambios sin guardar en esta ventana. ¿Desea refrescar y descartarlos?')
        : true;
      if (!confirmDiscard) return;
    }

    form.refreshView();
    this.notifyRefresh(`Vista "${active.title}" refrescada`);
  }

  closeActiveWindow(): void {
    const active = this.mdi.activeWindow();
    if (active) {
      this.mdi.close(active.id);
    }
  }

  activateNextWindow(): void {
    const visible = this.mdi.windows().filter(w => !w.minimized);
    if (visible.length <= 1) return;

    const currentActiveIndex = visible.findIndex(w => w.active);
    const nextIndex = currentActiveIndex >= 0 ? (currentActiveIndex + 1) % visible.length : 0;
    this.mdi.activate(visible[nextIndex].id);
  }

  private notifyRefresh(msg: string): void {
    this.lastRefreshNotification.set(msg);
  }
}
