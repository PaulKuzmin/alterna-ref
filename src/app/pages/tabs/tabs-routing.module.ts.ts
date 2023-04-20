import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'calcTab',
        loadComponent: () => import('../folder/folder.page').then(m => m.FolderPage)
      },
      {
        path: 'carTab',
        loadComponent: () => import('../folder/folder.page').then(m => m.FolderPage)
      },
      {
        path: 'examplesTab',
        loadComponent: () => import('../folder/folder.page').then(m => m.FolderPage)
      },
      {
        path: 'tnvedTab',
        loadComponent: () => import('../folder/folder.page').then(m => m.FolderPage)
      },
      {
        path: 'roisTab',
        loadComponent: () => import('../folder/folder.page').then(m => m.FolderPage)
      },
      {
        path: '',
        redirectTo: '/tabs/calcTab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calcTab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
