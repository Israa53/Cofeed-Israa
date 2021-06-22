import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  account = {};
  constructor() { }
  ngOnInit(): void {
    this.account = {
    accountFullName: 'Hassan Ahmed',
    accountImage: './../../../assets/images/user5.png',
    accountUserName: '@hassan58'};
  }
}
