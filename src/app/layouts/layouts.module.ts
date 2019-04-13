import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global/global.component';
import { SharedModule } from '../shared/shared.module';

const LAYOUTCOMPONENT = [
  GlobalComponent,
];

@NgModule({
  declarations: [...LAYOUTCOMPONENT],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [...LAYOUTCOMPONENT],
})
export class LayoutsModule {
}
