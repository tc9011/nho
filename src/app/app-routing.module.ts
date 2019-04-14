import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampListComponent } from './pages/camp-list/camp-list.component';
import { CampDetailsComponent } from './pages/camp-details/camp-details.component';
import { GlobalComponent } from './layouts/global/global.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardLogin } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: GlobalComponent,
    canActivate: [AuthGuardLogin],
    canActivateChild: [AuthGuardLogin],
    children: [
      {
        path: '',
        redirectTo: 'campList',
        pathMatch: 'full',
      },
      {
        path: 'campList',
        component: CampListComponent,
      },
      {
        path: 'campDetails/:id',
        component: CampDetailsComponent,
      }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
