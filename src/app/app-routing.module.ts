import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'reddit', loadChildren: 'app/modules/subreddit/subreddit.module#SubredditModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        enableTracing: false,
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


