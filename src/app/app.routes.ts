import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'alterna',
    loadComponent: () => import('./pages/alterna/alterna.page').then( m => m.AlternaPage)
  },
  {
    path: 'examples',
    loadComponent: () => import('./pages/examples/examples.page').then( m => m.ExamplesPage)
  },
];
