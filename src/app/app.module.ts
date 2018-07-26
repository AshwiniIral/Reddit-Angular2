import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './root/app.component';
import {Angular2Module} from './modules/angular2/angular2.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Angular2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
