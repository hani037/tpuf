import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {UserModel} from '../user.model';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  user: UserModel[] = [];
  et = false;

  constructor(@Inject(MAT_DIALOG_DATA) public da: any, private users: UsersService) {
  }

  ngOnInit() {
    this.users.getuser().subscribe(data => this.user = data);
  }

  onSubmit(f) {
    const name = f.value.name;
    const email = f.value.email;
    if (this.da.type === 'ajouter') {
      const password = f.value.password;
      const us = this.user.find(data => email === data.email);
      if (us) {
        this.et = true;
      } else {
        this.users.adduser(name, email, password).subscribe(data => {
          this.users.add.next(2);

        });
      }
    } else {
      const us = this.user.find(data => email === data.email);
      if (us) {
        this.et = true;
      } else {
        this.users.modifieruser(this.da.us.id, name, email);
      }
    }
  }
}
