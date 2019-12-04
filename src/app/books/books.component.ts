import { Component, OnInit } from '@angular/core';

import {BooksService} from '../books.service';
import {MatDialog} from '@angular/material';
import {DetailsComponent} from '../details/details.component';
import {AuthService} from '../auth.service';
import {BookModel} from '../book.model';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: BookModel[];
  serach = '';
  op = 'option1';
  auth: number = 0;
  constructor( private http: HttpClient,
               private booksService: BooksService,
               private dialog: MatDialog, private authService: AuthService ) { }

  ngOnInit() {
     this.booksService.getbooks().subscribe(data => {
       this.books = data;
       console.log(this.books);
     });
     this.auth = this.authService.getauth();
     console.log(this.auth);
  }
public details(book) {
  this.dialog.open(DetailsComponent, {data: book});
  console.log(this.op);
}

  public ajouter(book) {
this.booksService.ajouterpanier(book);
  }
 /* public filtrage() {
     this.books.forEach(data => {
      if (data.name.indexOf(this.serach) > -1 ) {
        this.bookss.push(data);
        console.log(data);
        console.log(this.bookss);
      }
    });
  }*/
}

