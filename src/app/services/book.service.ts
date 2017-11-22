import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService{
  constructor(private http: Http){
    console.log('Post request for book service initiated..');
  }

  getBooks(){
    return this.http
      .get("https://api.github.com/users/sonukomar/repos")
      .map(res => res.json());
  }
}
