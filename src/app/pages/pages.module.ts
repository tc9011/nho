import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { CampListComponent } from './camp-list/camp-list.component';
import { CampComponent } from './camp/camp.component';
import { MyCampComponent } from './my-camp/my-camp.component';
import { CampDetailsComponent } from './camp-details/camp-details.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    CampListComponent,
    CampComponent,
    MyCampComponent,
    CampDetailsComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
})
export class PagesModule {
}
