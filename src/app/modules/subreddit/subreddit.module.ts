import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';

import {CoreModule} from '../core/core.module';
import {SubredditRoutingModule} from './subreddit-routing.module';

import {ListSubredditComponent} from './component/list-subreddit/list-subreddit.component';

import {FetchSubredditService} from './services/fetch-subreddit/fetch-subreddit.service';

@NgModule({
  imports: [
    CommonModule,
    SubredditRoutingModule,
    CoreModule,
    HttpModule
  ],
  declarations: [ListSubredditComponent],
  providers: [FetchSubredditService],
})
export class SubredditModule {
}
