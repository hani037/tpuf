import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor( private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
  }
  onSubmit(f) {
    this.router.navigate(['/sign-in'], {relativeTo: this.route});
  }
}

