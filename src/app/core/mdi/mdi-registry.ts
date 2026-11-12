import { Type } from '@angular/core';
import { InicioViewComponent } from '../mdi/components/inicio-view.component';
import { AsociarProductosComponent } from '../../modules/contratos/asociar-productos.component';
import { CondicionesTarifaComponent } from '../../modules/contratos/condiciones-tarifa.component';
import {
  ContratanteComponent,
  EntidadesComponent,
  TablasBasicasComponent,
  TarifasComponent,
  DestinosPaquetesComponent,
  ProximoVencerComponent
} from '../../modules/contratos/contratos-pages.component';
import { GenericModuleViewComponent } from '../../modules/common/generic-module-view.component';

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
  asociarProductos: {
    id: 'asociarProductos',
    title: 'Asociar Productos a Contratos',
    component: AsociarProductosComponent,
    width: 860,
    height: 520
  },
  mnu_Con_Conf_Apac: {
    id: 'mnu_Con_Conf_Apac',
    title: 'Asociar Productos a Contratos',
    component: AsociarProductosComponent,
    width: 860,
    height: 520
  },
  condicionesTarifa: {
    id: 'condicionesTarifa',
    title: 'Condiciones de Tarifa',
    component: CondicionesTarifaComponent,
    width: 820,
    height: 500
  },
  mnu_Con_Conf_Cond: {
    id: 'mnu_Con_Conf_Cond',
    title: 'Condiciones sobre tarifa',
    component: CondicionesTarifaComponent,
    width: 820,
    height: 500
  },
  contratante: {
    id: 'contratante',
    title: 'Contratante',
    component: ContratanteComponent,
    width: 760,
    height: 460
  },
  entidades: {
    id: 'entidades',
    title: 'Entidades',
    component: EntidadesComponent,
    width: 760,
    height: 460
  },
  tablasBasicas: {
    id: 'tablasBasicas',
    title: 'Tablas Básicas',
    component: TablasBasicasComponent,
    width: 760,
    height: 460
  },
  tarifas: {
    id: 'tarifas',
    title: 'Tarifas',
    component: TarifasComponent,
    width: 760,
    height: 460
  },
  destinosPaquetes: {
    id: 'destinosPaquetes',
    title: 'Configuración Destinos y Paquetes',
    component: DestinosPaquetesComponent,
    width: 760,
    height: 460
  },
  proximoVencer: {
    id: 'proximoVencer',
    title: 'Contratos Próximos a Vencer',
    component: ProximoVencerComponent,
    width: 780,
    height: 480
  }
};

export function getOrCreateForm(id: string, title: string, moduleName: string): FormDefinition {
  if (MDI_FORMS[id]) {
    return MDI_FORMS[id];
  }

  return {
    id,
    title,
    component: GenericModuleViewComponent,
    width: 780,
    height: 490
  };
}
