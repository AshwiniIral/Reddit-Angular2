import {constants} from './constants';

export let endpoints = {
  'getSubredditUrl': function (subreddit: string) {
    return `${constants.host}/${subreddit}`;
  }
}
