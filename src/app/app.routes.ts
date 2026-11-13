import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/mdi/components/mdi-shell/mdi-shell.component').then(
        m => m.MdiShellComponent
      )
  },
  {
    path: 'mdi-demo',
    loadComponent: () =>
      import('./core/mdi/components/mdi-shell/mdi-shell.component').then(
        m => m.MdiShellComponent
      )
  },
  {
    path: ':moduleSlug/:formSlug',
    loadComponent: () =>
      import('./core/mdi/components/mdi-shell/mdi-shell.component').then(
        m => m.MdiShellComponent
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
