import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import {DetailsComponent} from '../details/details.component';
import {MatDialog} from '@angular/material';
import {AcheterComponent} from '../acheter/acheter.component';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  books;
  constructor(private dialog: MatDialog, private booksService: BooksService) { }

  ngOnInit() {
    this.books = this.booksService.getbooksp();
    console.log(this.books);
  }
 public acheter(book) {
    const nb = book.nb * (book.book.prix);
    this.dialog.open(AcheterComponent, {data: nb});
 }
}
