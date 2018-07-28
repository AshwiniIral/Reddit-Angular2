import {Component, OnInit} from '@angular/core';
import {subRedditData} from '../../../../mock-data/reddit-mock';
import {FetchSubredditService} from "../../services/fetch-subreddit/fetch-subreddit.service";
import {constants} from "../../../../properties/constants";

@Component({
  selector: 'app-list-subreddit',
  templateUrl: './list-subreddit.component.html',
  styleUrls: ['./list-subreddit.component.css']
})
export class ListSubredditComponent implements OnInit {

  public subReddits: any[];

  constructor(private fetchSubredditService: FetchSubredditService) {
  }

  ngOnInit() {
    const ssubReddits = this.fetchSubredditService.getsubreddits(constants.angularSubreddit);
    ssubReddits.then(subredditObj => {
      this.subReddits = subredditObj;
      console.log(this.subReddits);
    }).catch(error => {
      console.log(error);
    });
  }

  public hideSubreddit(indx) {
    console.log(this.subReddits[indx].title)
    this.subReddits[indx].hidden = true;
  }

  public dislike(indx) {
    this.subReddits[indx].downs = this.subReddits[indx].downs + 1;
    const unlikeDiv = document.getElementById('dislike' + indx);
    unlikeDiv.classList.remove('mat-light')
    console.log(unlikeDiv)
  }
}
