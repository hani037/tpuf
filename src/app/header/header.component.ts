import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public auth = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.authService.authchanged.subscribe((value) => {
     this.auth = value;
     console.log(value);
   });
  }

}

