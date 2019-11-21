import { Component, OnInit } from '@angular/core';

import {BooksService} from '../books.service';
import {MatDialog} from '@angular/material';
import {DetailsComponent} from '../details/details.component';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books;
  constructor( private booksService: BooksService, private dialog: MatDialog ) { }

  ngOnInit() {
    this.books = this.booksService.getbooks();
  }
public details(book) {
  this.dialog.open(DetailsComponent, {data: book});
}
}

