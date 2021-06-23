import { Component, OnInit } from '@angular/core';
import { currentUser } from 'src/app/models/user';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  account = currentUser;
  constructor() { }
  ngOnInit(): void {
  }
}
