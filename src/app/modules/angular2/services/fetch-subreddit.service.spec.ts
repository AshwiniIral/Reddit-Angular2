import { TestBed, inject } from '@angular/core/testing';

import { FetchSubredditService } from './fetch-subreddit.service';

describe('FetchSubredditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchSubredditService]
    });
  });

  it('should be created', inject([FetchSubredditService], (service: FetchSubredditService) => {
    expect(service).toBeTruthy();
  }));
});
