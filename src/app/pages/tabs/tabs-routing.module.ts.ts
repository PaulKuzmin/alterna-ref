import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('../folder/folder.page').then(m => m.FolderPage)
      },
      {
        path: 'tab2',
        loadComponent: () => import('../folder/folder.page').then(m => m.FolderPage)
      },
      {
        path: 'tab3',
        loadComponent: () => import('../folder/folder.page').then(m => m.FolderPage)
      },
      {
        path: 'tab4',
        loadComponent: () => import('../folder/folder.page').then(m => m.FolderPage)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
