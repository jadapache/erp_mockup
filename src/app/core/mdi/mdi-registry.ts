import { Type } from '@angular/core';
import { InicioViewComponent } from './components/inicio-view.component';
import { GenericModuleViewComponent } from '../../shared/components/generic-module-view.component';
import { APL_MOD_FORMS } from '../../modules/apl-mod/apl-mod.registry';
import { CON_MOD_FORMS } from '../../modules/con-mod/con-mod.registry';
import { ADM_MOD_FORMS } from '../../modules/adm-mod/adm-mod.registry';

export interface FormDefinition {
  id: string;
  title: string;
  component: Type<unknown>;
  width: number;
  height: number;
}

export const MDI_FORMS: Record<string, FormDefinition> = {
  inicio: {
    id: 'inicio',
    title: 'Inicio - Bienvenido',
    component: InicioViewComponent,
    width: 720,
    height: 480
  },
  ...CON_MOD_FORMS,
  ...APL_MOD_FORMS,
  ...ADM_MOD_FORMS
};

export function getOrCreateForm(id: string, title?: string, moduleName?: string): FormDefinition {
  if (MDI_FORMS[id]) {
    return MDI_FORMS[id];
  }

  return {
    id,
    title: title || id,
    component: GenericModuleViewComponent,
    width: 780,
    height: 490
  };
}
