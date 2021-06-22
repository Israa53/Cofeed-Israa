import { PostData } from './../../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filterBy = 'popular';
  constructor() { }

  ngOnInit(): void {
  }
filter(data){
this.filterBy = data;
}
}
