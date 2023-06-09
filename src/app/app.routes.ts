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
  {
    path: 'tnved',
    loadComponent: () => import('./pages/tnved/tnved.page').then( m => m.TnvedPage)
  },
  {
    path: 'tncode',
    loadComponent: () => import('./pages/tncode/tncode.page').then( m => m.TncodePage)
  },
  {
    path: 'calc',
    loadComponent: () => import('./pages/calc/calc.page').then( m => m.CalcPage)
  },
  {
    path: 'calc',
    loadComponent: () => import('./pages/calc/calc.page').then( m => m.CalcPage)
  },
  {
    path: 'calc-result',
    loadComponent: () => import('./pages/calc-result/calc-result.page').then( m => m.CalcResultPage)
  },
  {
    path: 'autocalc',
    loadComponent: () => import('./pages/autocalc/autocalc.page').then( m => m.AutocalcPage)
  },
  {
    path: 'autocalc-result',
    loadComponent: () => import('./pages/autocalc-result/autocalc-result.page').then( m => m.AutocalcResultPage)
  },
];
