import { FormDefinition } from '../../core/mdi/mdi-registry';
import { CitasComponent } from './pages/citas/citas.component';
import { AlertasAdmisionesComponent } from './pages/alertas-admisiones/alertas-admisiones.component';
import { AtencionPacienteComponent } from './pages/atencion-paciente/atencion-paciente.component';
import { ProximoVencerComponent } from '../con-mod/pages/contratos-pages/contratos-pages.component';

export const ADM_MOD_FORMS: Record<string, FormDefinition> = {
  mnu_Adm_Proc_Cita: {
    id: 'mnu_Adm_Proc_Cita',
    title: 'Gestión de Citas',
    component: CitasComponent,
    width: 1040,
    height: 620
  },
  mnu_Adm_Proc_Aler: {
    id: 'mnu_Adm_Proc_Aler',
    title: 'Alertas',
    component: AlertasAdmisionesComponent,
    width: 960,
    height: 540
  },
  mnu_Adm_Proc_Aten: {
    id: 'mnu_Adm_Proc_Aten',
    title: 'Atención del Paciente',
    component: AtencionPacienteComponent,
    width: 1100,
    height: 680
  },
  mnu_adm_info_ProV: {
    id: 'mnu_adm_info_ProV',
    title: 'Contratos Próximos a Vencer',
    component: ProximoVencerComponent,
    width: 780,
    height: 480
  }
};
