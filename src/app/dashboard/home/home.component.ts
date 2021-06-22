import { posts } from './../../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filterBy = 'popular';
  posts = posts;
  constructor() { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('posts'))) {
      this.posts = JSON.parse(localStorage.getItem('posts'));
    } else {
      this.posts = posts;
      localStorage.setItem('posts', JSON.stringify(this.posts));
    }
  }
  filter(data) {
    this.filterBy = data;
  }
  lovedPost(id) {
    this.posts.map((post) => {
      if (post.id === id) {
        post.likes += 1;
        post.liked = true;
        localStorage.setItem('posts', JSON.stringify(this.posts));
      }
    });
  }
}
