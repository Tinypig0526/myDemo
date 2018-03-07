
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ControlService {

  constructor( private http: Http) { }


  // handleError: any;

  route_control = 0;
  tab_num = 1 ;

  postData(url, value) {
    return this.http.post(url, value).toPromise()
      .then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.json());
        });
      })
      .catch(this.handleError);
  }

  getData(url) {
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return new Promise((resolve, reject) => {
          resolve(response.json());
        });
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}


