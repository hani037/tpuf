import { Component, OnInit } from '@angular/core';
import {UserModel} from '../user.model';
import {UsersService} from '../users.service';
import {BookModel} from '../book.model';
import {BooksService} from '../books.service';
import {MatDialog} from '@angular/material';
import {AdminUserComponent} from '../admin-user/admin-user.component';
import {DialogbooksComponent} from '../dialogbooks/dialogbooks.component';

@Component({
  selector: 'app-adminbooks',
  templateUrl: './adminbooks.component.html',
  styleUrls: ['./adminbooks.component.css']
})
export class AdminbooksComponent implements OnInit {
  books: BookModel[] = [];
  constructor( private dialog: MatDialog, private booksservice: BooksService) { }

  ngOnInit() {
    this.booksservice.getbooks().subscribe(data => this.books = data);
    this.booksservice.add.subscribe(da => {
      this.dialog.closeAll();
      this.booksservice.getbooks().subscribe(data => this.books = data);
    });
  }
  public supprimer(book) {
    this.booksservice.supprimerbook(book.id);
  }
  public modifier(book) {
    const da = {
      bo: book,
      type: 'modifier'
    };
    this.dialog.open(DialogbooksComponent, {data: da});
  }
}

