import { Component, OnInit } from '@angular/core';
import {UserModel} from '../user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: UserModel[] = [];
  et = false;
  constructor( private route: ActivatedRoute,
               private router: Router, private authService: AuthService, private users: UsersService) { }

  ngOnInit() {
    this.users.getuser().subscribe(data => this.user = data);
  }
  onSubmit(f) {
    const name = f.value.name;
    const email = f.value.email;
    const password = f.value.password;
    const us = this.user.find(data => email === data.email );
    if (us) {
      this.et = true ;
    } else {
      this.users.adduser(name, email, password).subscribe(data => this.router.navigate(['/sign-in']));
    }
  }
}

