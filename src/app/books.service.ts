import { Injectable } from '@angular/core';
import {BookModel} from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: BookModel[] = [new BookModel( '../../assets/images/pile-of-five-books-51342.jpg',
    'description1', 10, {name: 'hani', text: 'text1'}),
    new BookModel('../../assets/images/opened-book-2099691.jpg',
      'description2', 20, {name: 'oussema', text: 'text2'})
  ]

  constructor() { }
public getbooks() {
    return  this.books.slice();
}
}
