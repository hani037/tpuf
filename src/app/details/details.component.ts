import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {BookModel} from '../book.model';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
img: string = '../' + this.data.img
  constructor(@Inject(MAT_DIALOG_DATA) public data: BookModel) {}

  ngOnInit() {
  }

}
