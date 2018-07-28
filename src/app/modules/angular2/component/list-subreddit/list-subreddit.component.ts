import { Component, OnInit } from '@angular/core';
import {subRedditData} from '../../../../mock-data/reddit-mock';

@Component({
  selector: 'app-list-subreddit',
  templateUrl: './list-subreddit.component.html',
  styleUrls: ['./list-subreddit.component.css']
})
export class ListSubredditComponent implements OnInit {

  public subReddits: any[];
  constructor() { }

  ngOnInit() {
    this.subReddits = subRedditData;
    console.log(this.subReddits);
  }
}
