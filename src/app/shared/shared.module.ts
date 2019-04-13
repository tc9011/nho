import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const SHAREDMODULES = [
  HttpClientModule,
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
];

@NgModule({
  imports: [...SHAREDMODULES],
  exports: [...SHAREDMODULES],
})
export class SharedModule {
}
