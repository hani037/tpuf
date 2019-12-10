import {Component, Inject, OnInit} from '@angular/core';
import {UserModel} from '../user.model';
import {MAT_DIALOG_DATA} from '@angular/material';
import {UsersService} from '../users.service';
import {BooksService} from '../books.service';
import {BookModel} from '../book.model';

@Component({
  selector: 'app-dialogbooks',
  templateUrl: './dialogbooks.component.html',
  styleUrls: ['./dialogbooks.component.css']
})
export class DialogbooksComponent implements OnInit {
  book: BookModel[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public da: any, private books: BooksService) {}

  ngOnInit() {
    this.books.getbooks().subscribe(data => this.book = data);
  }
  onSubmit(f) {
    const name = f.value.name;
    const genre = f.value.genre;
    const descr = f.value.description;
    const prix = f.value.prix;
    const dis = f.value.dis;
    console.log(dis);
    this.books.modifierbook(this.da.bo.id, name, descr, prix, dis, genre);
  }
}
