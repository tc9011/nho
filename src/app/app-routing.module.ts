import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampListComponent } from './pages/camp-list/camp-list.component';
import { CampDetailsComponent } from './pages/camp-details/camp-details.component';
import { GlobalComponent } from './layouts/global/global.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalComponent,
    children: [
      {
        path: '',
        redirectTo: '/campList',
        pathMatch: 'full',
      },
      {
        path: 'campList',
        component: CampListComponent,
      },
      {
        path: 'campDetails',
        component: CampDetailsComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
