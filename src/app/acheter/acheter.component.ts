import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {BookModel} from '../book.model';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-acheter',
  templateUrl: './acheter.component.html',
  styleUrls: ['./acheter.component.css']
})
export class AcheterComponent implements OnInit {

 constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userservice: UsersService) {}

ngOnInit() {
}
onSubmit(f) {
  this.userservice.cancel(this.data);
}
}
