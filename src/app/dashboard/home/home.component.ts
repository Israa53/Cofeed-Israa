import { posts } from './../../models/post';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  filterBy  = 'all';
  posts = [] ;
  filterArr = posts;
  constructor() { }
  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('posts'))) {
      this.posts = JSON.parse(localStorage.getItem('posts'));
      this.filterArr = JSON.parse(localStorage.getItem('posts'));
    } else {
      this.posts = posts;
      localStorage.setItem('posts', JSON.stringify(this.posts));
    }
  }
  filter(data: string) {
    this.filterBy = data;
    // console.log(data)
    if(data !== 'all') {
      // console.log('not all')
     this.filterArr = [...this.posts].filter(post => post.type === data);
    } else {
      this.filterArr = posts;
    }

  }
  lovedPost(id: number) {
    this.posts.map((post) => {
      if (post.id === id) {
        post.likes += 1;
        post.liked = true;
        localStorage.setItem('posts', JSON.stringify(this.posts));
        this.filter(this.filterBy);
      }
    });

  }
}
