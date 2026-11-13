import { Routes } from '@angular/router';
import { DivisionPoliticaComponent } from './pages/division-politica/division-politica.component';

export const APL_MOD_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'division-politica',
    pathMatch: 'full'
  },
  {
    path: 'division-politica',
    component: DivisionPoliticaComponent
  }
];
