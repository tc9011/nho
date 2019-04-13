import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampListComponent } from './camp-list/camp-list.component';
import { CampDetailsComponent } from './camp-details/camp-details.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
