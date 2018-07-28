import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './root/app.component';
import {SubredditModule} from './modules/subreddit/subreddit.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SubredditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
