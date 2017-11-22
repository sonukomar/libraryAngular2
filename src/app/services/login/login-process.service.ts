import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * @description
 * @class
 */
@Injectable()
export class LoginProcessService {
  constructor(private http: Http) {
    console.log("Post request for login service initiated..");
  }

  getUsers() {
    return this.http
      .get('../../../assets/localData/user.json')
      .map(res => res.json());
  }
}
