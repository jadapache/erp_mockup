import { FormDefinition } from '../../core/mdi/mdi-registry';
import { AsociarProductosComponent } from './pages/asociar-productos/asociar-productos.component';
import { CondicionesTarifaComponent } from './pages/condiciones-tarifa/condiciones-tarifa.component';
import {
  ContratanteComponent,
  EntidadesComponent,
  TablasBasicasComponent,
  TarifasComponent,
  DestinosPaquetesComponent
} from './pages/contratos-pages/contratos-pages.component';

export const CON_MOD_FORMS: Record<string, FormDefinition> = {
  mnu_Con_Conf_Apac: {
    id: 'mnu_Con_Conf_Apac',
    title: 'Asociar Productos a Contratos',
    component: AsociarProductosComponent,
    width: 860,
    height: 520
  },
  mnu_Con_Conf_Cond: {
    id: 'mnu_Con_Conf_Cond',
    title: 'Condiciones sobre tarifa',
    component: CondicionesTarifaComponent,
    width: 820,
    height: 500
  },
  mnu_Con_Conf_cont: {
    id: 'mnu_Con_Conf_cont',
    title: 'Contratante',
    component: ContratanteComponent,
    width: 760,
    height: 460
  },
  mnu_Con_Conf_Enti: {
    id: 'mnu_Con_Conf_Enti',
    title: 'Entidades',
    component: EntidadesComponent,
    width: 760,
    height: 460
  },
  mnu_Con_Conf_Tabl: {
    id: 'mnu_Con_Conf_Tabl',
    title: 'Tablas Básicas',
    component: TablasBasicasComponent,
    width: 760,
    height: 460
  },
  mnu_Con_Conf_Tari: {
    id: 'mnu_Con_Conf_Tari',
    title: 'Tarifas',
    component: TarifasComponent,
    width: 760,
    height: 460
  },
  mnu_Con_Conf_CDPA: {
    id: 'mnu_Con_Conf_CDPA',
    title: 'Configuración Destinos y Paquetes',
    component: DestinosPaquetesComponent,
    width: 760,
    height: 460
  }
};
