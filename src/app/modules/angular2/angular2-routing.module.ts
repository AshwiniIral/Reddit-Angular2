import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DisplayRedditComponent} from './display-reddit/display-reddit.component';

const routes: Routes = [
  {path: '', component: DisplayRedditComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Angular2RoutingModule {
}
