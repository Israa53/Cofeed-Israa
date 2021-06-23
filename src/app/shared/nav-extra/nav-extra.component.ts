import { Component, OnInit } from '@angular/core';
import { followers } from 'src/app/models/follow';
import { latestPost } from 'src/app/models/post';

@Component({
  selector: 'app-nav-extra',
  templateUrl: './nav-extra.component.html',
  styleUrls: ['./nav-extra.component.scss']
})
export class NavExtraComponent implements OnInit {
  followers = followers;
  post = latestPost;
  constructor() { }

  ngOnInit(): void {
  }

}
