import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material';

import {FetchSubredditService} from '../../services/fetch-subreddit/fetch-subreddit.service';
import {constants} from '../../../../properties/constants';

@Component({
  selector: 'app-list-subreddit',
  templateUrl: './list-subreddit.component.html',
  styleUrls: ['./list-subreddit.component.css']
})
export class ListSubredditComponent implements OnInit {

  public subReddits: any[];   // array of objects for the subreddits
  public likedReddits: string[];  // array of liked subreddits
  public dislikedReddits: string[];  // array of unliked reddits

  constructor(public snackBar: MatSnackBar,
              private fetchSubredditService: FetchSubredditService) {
    this.subReddits = [];
    this.likedReddits = [];
    this.dislikedReddits = [];
  }

  ngOnInit() {
    this.fetchContent();
  }

  public refresh() {
    this.likedReddits = [];
    this.dislikedReddits = [];
    this.fetchContent();
    this.snackBar.open('refreshed', '', {
      duration: 500
    });
  }

  public fetchContent() { // get subreddits from the api
    const ssubReddits = this.fetchSubredditService.getsubreddits(constants.angularSubreddit);
    ssubReddits.then(subredditObj => {
      this.subReddits = subredditObj;
    }).catch(error => {
      console.log(error);
    });
  }

  public hideSubreddit(indx) {  // hide the subreddit on click of close
    this.subReddits[indx].hidden = true;
    if (this.likedReddits.includes(indx)) {
      this.likedReddits.splice(this.likedReddits.indexOf(indx), 1);
    }
    if (this.dislikedReddits.includes(indx)) {
      this.dislikedReddits.splice(this.dislikedReddits.indexOf(indx), 1);
    }
  }

  public subredditOpinion(opinion: string, indx: string) { // when user clicks like/dislike
    const opinionDiv = document.getElementById(opinion + indx);
    if (this.subReddits[indx].opinion === '') { // selecting opinion first liked/disliked
      this.subReddits[indx].opinion = opinion;
      opinionDiv.classList.remove('mat-light');
      if (opinion === 'thumb_up') {
        this.subReddits[indx].ups = this.subReddits[indx].ups + 1;
        this.likedReddits.push(indx);
      } else {
        this.subReddits[indx].downs = this.subReddits[indx].downs + 1;
        this.dislikedReddits.push(indx);
      }
    } else if ((opinion === 'thumb_up' && this.subReddits[indx].opinion === 'thumb_up') ||
      (opinion === 'thumb_down' && this.subReddits[indx].opinion === 'thumb_down')) { // if liked or disliked again
      opinionDiv.classList.add('mat-light');
      this.subReddits[indx].opinion = '';
      if (opinion === 'thumb_up') {
        this.subReddits[indx].ups = this.subReddits[indx].ups - 1;
        this.likedReddits.splice(this.likedReddits.indexOf(indx), 1);
      } else {
        this.subReddits[indx].downs = this.subReddits[indx].downs - 1;
        this.dislikedReddits.splice(this.dislikedReddits.indexOf(indx), 1);
      }
    } else { // switching opinion
      this.subReddits[indx].opinion = opinion;
      opinionDiv.classList.remove('mat-light');
      if (opinion === 'thumb_up') {
        this.likedReddits.push(indx);
        this.dislikedReddits.splice(this.dislikedReddits.indexOf(indx), 1);
        this.subReddits[indx].ups = this.subReddits[indx].ups + 1;
        const prevOpinionDiv = document.getElementById('thumb_down' + indx);
        prevOpinionDiv.classList.add('mat-light');
        this.subReddits[indx].downs = this.subReddits[indx].downs - 1;
      } else {
        this.dislikedReddits.push(indx);
        this.likedReddits.splice(this.likedReddits.indexOf(indx), 1);
        this.subReddits[indx].downs = this.subReddits[indx].downs + 1;
        const prevOpinionDiv = document.getElementById('thumb_up' + indx);
        prevOpinionDiv.classList.add('mat-light');
        this.subReddits[indx].ups = this.subReddits[indx].ups - 1;
      }
    }
  }

  public listOpinions(opinionType: string) { // when user clicks like and dislike on the toolbar
    const listLikeButton = document.getElementById('showLike');
    const listDislikeButton = document.getElementById('showDislike');
    const modifiedSubReddits: any[] = [];
    if (opinionType === 'like') {
      if (this.likedReddits.length !== 0) {
        for (const indx of this.likedReddits) {
          modifiedSubReddits.push(this.subReddits[indx]);
        }
        this.subReddits = modifiedSubReddits;
      } else {
        this.snackBar.open('You have not liked any subreddits', '', {
          duration: 1000
        });
      }
      listLikeButton.classList.add('list-opinion');
      listDislikeButton.classList.remove('list-opinion');
    } else {
      if (this.dislikedReddits.length !== 0) {
        for (const indx of this.dislikedReddits) {
          modifiedSubReddits.push(this.subReddits[indx]);
        }
        this.subReddits = modifiedSubReddits;
      } else {
        this.snackBar.open('Great!! You have not disliked any subreddits', '', {
          duration: 1000
        });
      }
      listDislikeButton.classList.add('list-opinion');
      listLikeButton.classList.remove('list-opinion');
    }
  }

}
