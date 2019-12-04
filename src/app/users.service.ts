import { Injectable } from '@angular/core';
import {BookModel} from './book.model';
import {HttpClient} from '@angular/common/http';
import {UserModel} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private Url = '../assets/users.json';
  private user: UserModel[] = [];
  constructor( private http: HttpClient) { }

  public getuser() {
     return this.http.get<UserModel[]>(this.Url);
  }
  public setuser(users) {
    this.user = users;
  }
  public adduser(user: UserModel) {
    this.user.push(user);
  }
}
