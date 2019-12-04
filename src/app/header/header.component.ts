import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public auth = 0;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
   this.authService.authchanged.subscribe((value) => {
     this.auth = value;
   });
  }
 public dec() {
    this.authService.dec();
    this.router.navigate(['/']);
 }
}

