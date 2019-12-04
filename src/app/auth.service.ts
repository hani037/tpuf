import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = 0;
  authchanged = new Subject<number>()
  constructor() { }

  public changeauth() {
    this.authchanged.next(1);
    this.auth = 1;
  }
  public getauth() {
    return this.auth;
  }
  public dec() {
    this.auth = 0;
    this.authchanged.next(0);
  }
  public admin() {
    this.authchanged.next(2);
    this.auth = 2;
  }
}
