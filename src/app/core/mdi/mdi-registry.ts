import { Type } from '@angular/core';
import { InicioViewComponent } from './components/inicio-view.component';
import { AsociarProductosComponent } from '../../modules/con-mod/pages/asociar-productos/asociar-productos.component';
import { CondicionesTarifaComponent } from '../../modules/con-mod/pages/condiciones-tarifa/condiciones-tarifa.component';
import {
  ContratanteComponent,
  EntidadesComponent,
  TablasBasicasComponent,
  TarifasComponent,
  DestinosPaquetesComponent,
  ProximoVencerComponent
} from '../../modules/con-mod/pages/contratos-pages/contratos-pages.component';
import { GenericModuleViewComponent } from '../../shared/components/generic-module-view.component';
import { DivisionPoliticaComponent } from '../../modules/apl-mod/pages/division-politica/division-politica.component';
import { NumeracionComponent } from '../../modules/apl-mod/pages/numeracion/numeracion.component';
import { DocumentosValoresPagoComponent } from '../../modules/apl-mod/pages/documentos-valores-pago/documentos-valores-pago.component';
import { CitasComponent } from '../../modules/adm-mod/pages/citas/citas.component';
import { AlertasAdmisionesComponent } from '../../modules/adm-mod/pages/alertas-admisiones/alertas-admisiones.component';
import { AtencionPacienteComponent } from '../../modules/adm-mod/pages/atencion-paciente/atencion-paciente.component';

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
  },
  divisionPolitica: {
    id: 'divisionPolitica',
    title: 'División Política Internacional',
    component: DivisionPoliticaComponent,
    width: 920,
    height: 560
  },
  mnu_apl_ento_dipo: {
    id: 'mnu_apl_ento_dipo',
    title: 'División Política Internacional',
    component: DivisionPoliticaComponent,
    width: 920,
    height: 560
  },
  documentosValoresPago: {
    id: 'documentosValoresPago',
    title: 'Documentos Valores de Pago',
    component: DocumentosValoresPagoComponent,
    width: 940,
    height: 580
  },
  mnu_apl_ento_dpag: {
    id: 'mnu_apl_ento_dpag',
    title: 'Documentos Valores de Pago',
    component: DocumentosValoresPagoComponent,
    width: 940,
    height: 580
  },
  numeracion: {
    id: 'numeracion',
    title: 'Numeración',
    component: NumeracionComponent,
    width: 900,
    height: 520
  },
  mnu_apl_ento_nume: {
    id: 'mnu_apl_ento_nume',
    title: 'Numeración',
    component: NumeracionComponent,
    width: 900,
    height: 520
  },
  citas: {
    id: 'citas',
    title: 'Gestión de Citas',
    component: CitasComponent,
    width: 1040,
    height: 620
  },
  mnu_Adm_Proc_Cita: {
    id: 'mnu_Adm_Proc_Cita',
    title: 'Gestión de Citas',
    component: CitasComponent,
    width: 1040,
    height: 620
  },
  alertas: {
    id: 'alertas',
    title: 'Alertas',
    component: AlertasAdmisionesComponent,
    width: 960,
    height: 540
  },
  mnu_Adm_Proc_Aler: {
    id: 'mnu_Adm_Proc_Aler',
    title: 'Alertas',
    component: AlertasAdmisionesComponent,
    width: 960,
    height: 540
  },
  atencionPaciente: {
    id: 'atencionPaciente',
    title: 'Atención del Paciente',
    component: AtencionPacienteComponent,
    width: 1100,
    height: 680
  },
  mnu_Adm_Proc_Aten: {
    id: 'mnu_Adm_Proc_Aten',
    title: 'Atención del Paciente',
    component: AtencionPacienteComponent,
    width: 1100,
    height: 680
  }
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
