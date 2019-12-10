import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import {DetailsComponent} from '../details/details.component';
import {MatDialog} from '@angular/material';
import {AcheterComponent} from '../acheter/acheter.component';
import {UsersService} from '../users.service';
import {until} from 'selenium-webdriver';
import titleIs = until.titleIs;


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  books;
  constructor(private dialog: MatDialog, private userservice: UsersService) { }

  ngOnInit() {
    this.books = this.userservice.getus().subscribe(data => this.books = data.book );
    this.userservice.ca.subscribe(da => this.userservice.getus().subscribe(data => {
      this.dialog.closeAll();
      this.books = data.book;
    } ) );
  } public cancel(book) {
    this.userservice.cancel(book);
  }
 public acheter(book) {
    this.dialog.open(AcheterComponent, {data: book});
 }
}
