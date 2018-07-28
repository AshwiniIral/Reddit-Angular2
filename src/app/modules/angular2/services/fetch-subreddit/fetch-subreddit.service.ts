import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import {endpoints} from '../../../../properties/endpoints';

@Injectable()
export class FetchSubredditService {

  private requestOptions: RequestOptions;

  constructor(private http: Http) {
  }

  getsubreddits(subredditName: string): Promise<any> {
    return this.http.get(endpoints.getSubredditUrl(subredditName), this.requestOptions)
      .toPromise()
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  private handleResponse(response: Response): Promise<any> {
    const parsedResponse = response.json();
    const subredditObj: any[] = [];
    for (const subred of parsedResponse.data.children) {
      subred.liked = false;
      subred.unliked = false;
      subredditObj.push(subred.data);
    }
    return Promise.resolve(subredditObj);
  }

  private handleError(error: Response): Promise<any> {
    // when endpoints are not reachable or not connected to the network
    if (error.status === 0) {
      return Promise.reject({
        'status': 'Failed',
        'description': 'Check your network connectivity. Also check if API service is up and running'
      });
    } else {
      return Promise.reject(error);
    }
  }

}
