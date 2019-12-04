import { Component, OnInit } from '@angular/core';
import {UserModel} from '../user.model';
import {UsersService} from '../users.service';
import {BookModel} from '../book.model';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-adminbooks',
  templateUrl: './adminbooks.component.html',
  styleUrls: ['./adminbooks.component.css']
})
export class AdminbooksComponent implements OnInit {
  books: BookModel[] = [];
  constructor(private bookservice: BooksService) { }

  ngOnInit() {
    this.bookservice.getbooks().subscribe(data => this.books = data);
  }
  public supprimer(data) {
  }
  public ajouter1() {
  }
  public modifier(indice) {
  }
}
