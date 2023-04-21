import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'calcTab',
        loadComponent: () =>
          import('../calc/calc.page').then((m) => m.CalcPage),
      },
      {
        path: 'calcTab/:code',
        loadComponent: () =>
          import('../calc/calc.page').then((m) => m.CalcPage),
      },
      {
        path: 'carTab',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'examplesTab',
        loadComponent: () =>
          import('../examples/examples.page').then((m) => m.ExamplesPage),
      },
      {
        path: 'examplesTab/:text',
        loadComponent: () =>
          import('../examples/examples.page').then((m) => m.ExamplesPage),
      },
      {
        path: 'tnvedTab',
        loadComponent: () =>
          import('../tnved/tnved.page').then((m) => m.TnvedPage),
      },
      {
        path: 'tnvedTab/:code',
        loadComponent: () =>
          import('../tnved/tnved.page').then((m) => m.TnvedPage),
      },
      {
        path: 'tncode/:code',
        loadComponent: () =>
          import('../tncode/tncode.page').then((m) => m.TncodePage),
      },
      {
        path: 'alternaTab',
        loadComponent: () =>
          import('../alterna/alterna.page').then((m) => m.AlternaPage),
      },
      {
        path: '',
        redirectTo: '/tabs/calcTab',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/calcTab',
    pathMatch: 'full',
  },
];
