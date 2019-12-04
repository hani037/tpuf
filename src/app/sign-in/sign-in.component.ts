import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../auth.service';
import {UsersService} from '../users.service';
import {UserModel} from '../user.model';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: UserModel[] = [];
  et = false;
  constructor( private route: ActivatedRoute,
               private router: Router, private authService: AuthService, private users: UsersService) { }

  ngOnInit() {
    this.users.getuser().subscribe(data => this.user = data);
  }
  onSubmit(f) {
    const email = f.value.email;
    const password = f.value.password;
    const us = this.user.find(data => email === data.email && password === data.password);
    if (!us) {
      this.et = true ;
    } else if (us.role === 'user') {
      this.authService.changeauth();
      this.router.navigate([''], {relativeTo: this.route});
    } else if (us.role === 'root') {
      this.authService.admin();
      this.router.navigate(['/admin'], {relativeTo: this.route});
    }
  }
}
