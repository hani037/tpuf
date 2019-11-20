import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor( private route: ActivatedRoute,
               private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(f) {
    this.authService.changeauth();
    this.router.navigate([''], {relativeTo: this.route});
  }
}
