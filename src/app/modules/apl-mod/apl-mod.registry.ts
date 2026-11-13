import { FormDefinition } from '../../core/mdi/mdi-registry';
import { DivisionPoliticaComponent } from './pages/division-politica/division-politica.component';

export const APL_MOD_FORMS: Record<string, FormDefinition> = {
  divisionPolitica: {
    id: 'divisionPolitica',
    title: 'División Política Internacional',
    component: DivisionPoliticaComponent,
    width: 960,
    height: 600
  },
  mnu_apl_ento_dipo: {
    id: 'mnu_apl_ento_dipo',
    title: 'División Política Internacional',
    component: DivisionPoliticaComponent,
    width: 960,
    height: 600
  }
};
