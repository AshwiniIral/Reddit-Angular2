import {Component, OnInit} from '@angular/core';
import {subRedditData} from '../../../mock-data/reddit-mock';

@Component({
  selector: 'app-display-reddit',
  templateUrl: './display-reddit.component.html',
  styleUrls: ['./display-reddit.component.css']
})
export class DisplayRedditComponent implements OnInit {

  public subReddits: any[];

  ngOnInit() {
    this.subReddits = subRedditData;
    console.log(this.subReddits);
  }

}
