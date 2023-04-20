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
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'calcTab/:code',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
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
        path: 'tnvedTab',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
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
