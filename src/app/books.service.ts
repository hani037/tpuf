import { Injectable } from '@angular/core';
import {BookModel} from './book.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private Url = '../assets/books.json';
  private booksp: {book: BookModel, nb: number}[] = [];
  constructor( private http: HttpClient) { }

public getbooks() {
    return  this.http.get<BookModel[]>(this.Url);
  }
  public ajouterpanier(book: BookModel) {
    const el = this.booksp.find(obj => obj.book === book);
    if (el) {
      el.nb++;
    } else {
      this.booksp.push({book, nb: 1});
    }
  }
  public getbooksp() {
    return  this.booksp.slice();
  }
}
