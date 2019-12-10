import { Injectable } from '@angular/core';
import {BookModel} from './book.model';
import {HttpClient} from '@angular/common/http';
import {UserModel} from './user.model';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private Url = 'http://localhost:3000/users/';
  private user: UserModel[] = [];
  public usid: number;
  add = new Subject<number>();
  ca = new Subject<number>();
  constructor( private http: HttpClient, private router: Router) { }

  public getuser() {
     return this.http.get<UserModel[]>(this.Url);
  }
  public setus(userid: number) {
    this.usid = userid;
  }
  public getus() {
    console.log(this.Url + `${this.usid}`);
    return this.http.get<UserModel>(this.Url + `${this.usid}`);
  }
  public adduser(name: string, email: string, passowrd: string) {
    const postData = {
      na: name,
      em: email,
      password: passowrd,
      role: 'user'
    };
    console.log(postData);
    return this.http
      .post<{name: string, email: string, passowd: string, role: string}>(
        this.Url, postData
      );
  }
  public modifieruser( id: number, name: string , email: string) {
    const postData = {
      na: name,
      em: email,
      i: id
    };
    this.http.post<{i: number, na: string, em: string}>(
      this.Url + '/modifier', postData
    ).subscribe(data => {
      this.add.next(2);
    });
  }
  public supprimeruser(id: number) {
    console.log(id);
    const postData = {
      i: id
    };
    this.http.post<{id: number}>(this.Url + '/supprimer', postData).subscribe(data => this.add.next(2));
  }
  public cancel(book) {
    const postData = {
      book : book.bo.id,
      id : this.usid
    };
    this.http.post<{book: number, id: number}>(this.Url + 'cancel', postData).subscribe(data => this.ca.next(2));
  }
}
