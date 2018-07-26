import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreRoutingModule} from './core-routing.module';
import {AppMaterialModule} from '../app-material/app-material.module';

import {HomeComponent} from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AppMaterialModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent,
    AppMaterialModule
  ]
})
export class CoreModule {
}
