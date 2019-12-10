import { Injectable } from '@angular/core';
import {BookModel} from './book.model';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private Url = 'http://localhost:3000/books/';
  private Url2 = 'http://localhost:3000/users/';
  add = new Subject<number>();
  constructor( private http: HttpClient, private users: UsersService) { }

public getbooks() {
    return  this.http.get<BookModel[]>(this.Url);
  }
  public ajouterpanier(book: BookModel) {
    const postData = {
      bo: book,
      id: this.users.usid
    };
    console.log(postData.id);
    this.http.post<{book: BookModel, id: number}>(this.Url2 + 'ajouter', postData).subscribe(data => console.log(data));
  }
  public modifierbook(id: number, name: string, descr: string, prix: number, dis: string, genre: string) {
    const postData = {
      i: id,
      na: name,
      des: descr,
      px: prix,
      ds: dis,
      gre: genre
    };
    console.log(postData);
    this.http.post<{i: number, na: string, des: string, px: number, ds: string, gre: string}>(
      this.Url + 'modifier', postData
    ).subscribe(data => {
      this.add.next(2);
    });
  }
  public supprimerbook(id: number) {
    console.log(id);
    const postData = {
      i: id
    };
    this.http.post<{id: number}>(this.Url + '/supprimer', postData).subscribe(data => this.add.next(2));
  }
}

