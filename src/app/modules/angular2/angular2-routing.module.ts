import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListSubredditComponent} from './component/list-subreddit/list-subreddit.component';

const routes: Routes = [
  {path: '', component: ListSubredditComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular2RoutingModule {
}
