import {Component, OnInit} from '@angular/core';
import {FetchSubredditService} from '../../services/fetch-subreddit/fetch-subreddit.service';
import {constants} from '../../../../properties/constants';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-list-subreddit',
  templateUrl: './list-subreddit.component.html',
  styleUrls: ['./list-subreddit.component.css']
})
export class ListSubredditComponent implements OnInit {

  public subReddits: any[];
  public likedReddits: string[];
  public dislikedReddits: string[];

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
    this.fetchContent();
    this.snackBar.open('refreshed', '', {
      duration: 500
    });
  }

  public fetchContent() {
    const ssubReddits = this.fetchSubredditService.getsubreddits(constants.angularSubreddit);
    ssubReddits.then(subredditObj => {
      this.subReddits = subredditObj;
      console.log(this.subReddits);
    }).catch(error => {
      console.log(error);
    });
  }

  public hideSubreddit(indx) {
    this.subReddits[indx].hidden = true;
  }

  public subredditOpinion(opinion: string, indx: string) {
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

}
