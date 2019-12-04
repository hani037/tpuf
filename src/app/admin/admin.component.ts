import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {UserModel} from '../user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: UserModel[] = [];
  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    this.usersservice.getuser().subscribe(data => this.users = data);
  }
 public supprimer(data) {
}
public ajouter1() {
}
public modifier(indice) {
}
}
