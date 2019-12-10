import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {UserModel} from '../user.model';
import {MatDialog} from '@angular/material';
import {DetailsComponent} from '../details/details.component';
import {AdminUserComponent} from '../admin-user/admin-user.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: UserModel[] = [];
  constructor( private dialog: MatDialog, private usersservice: UsersService) { }

  ngOnInit() {
    this.usersservice.getuser().subscribe(data => this.users = data);
    this.usersservice.add.subscribe(da => {
      this.dialog.closeAll();
      this.usersservice.getuser().subscribe(data => this.users = data);
    });
  }
 public supprimer(user) {
    console.log(user.id);
    this.usersservice.supprimeruser(user.id);
}
public modifier(user) {
  const da = {
    us: user,
    type: 'modifier'
  };
  this.dialog.open(AdminUserComponent, {data: da});
}
public ajouter() {
  const da = {
    us: 'aa',
    type: 'ajouter'
  };
  this.dialog.open(AdminUserComponent, {data: da});
  }
}
