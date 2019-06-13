import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl:string = 'http://openlibrary.org/subjects/history.json';

  constructor(private http:HttpClient) { }

  // Get books
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }
  /* getBooks():Observable<Book[]> {
    return this.http
        .get(this.bookUrl)
        .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  } */
}
