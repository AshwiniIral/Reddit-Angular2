import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreModule} from '../core/core.module';
import {Angular2RoutingModule} from './angular2-routing.module';

import {DisplayRedditComponent} from './display-reddit/display-reddit.component';


@NgModule({
  imports: [
    CommonModule,
    Angular2RoutingModule,
    CoreModule
  ],
  declarations: [DisplayRedditComponent]
})
export class Angular2Module {
}
