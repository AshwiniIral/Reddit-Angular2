import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoreModule} from '../core/core.module';
import {Angular2RoutingModule} from './angular2-routing.module';

import {ListSubredditComponent} from './component/list-subreddit/list-subreddit.component';

import {FetchSubredditService} from './services/fetch-subreddit.service';


@NgModule({
  imports: [
    CommonModule,
    Angular2RoutingModule,
    CoreModule
  ],
  declarations: [ListSubredditComponent],
  providers: [FetchSubredditService],
})
export class Angular2Module {
}
