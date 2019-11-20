import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authchanged = new Subject<boolean>()
  constructor() { }

  public changeauth() {
    this.authchanged.next(true);
  }
}
