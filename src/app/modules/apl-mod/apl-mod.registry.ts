import { FormDefinition } from '../../core/mdi/mdi-registry';
import { DivisionPoliticaComponent } from './pages/division-politica/division-politica.component';
import { DocumentosValoresPagoComponent } from './pages/documentos-valores-pago/documentos-valores-pago.component';
import { NumeracionComponent } from './pages/numeracion/numeracion.component';

export const APL_MOD_FORMS: Record<string, FormDefinition> = {
  mnu_apl_ento_dipo: {
    id: 'mnu_apl_ento_dipo',
    title: 'División Política Internacional',
    component: DivisionPoliticaComponent,
    width: 920,
    height: 560
  },
  mnu_apl_ento_dpag: {
    id: 'mnu_apl_ento_dpag',
    title: 'Documentos Valores de Pago',
    component: DocumentosValoresPagoComponent,
    width: 940,
    height: 580
  },
  mnu_apl_ento_nume: {
    id: 'mnu_apl_ento_nume',
    title: 'Numeración',
    component: NumeracionComponent,
    width: 900,
    height: 520
  }
};
