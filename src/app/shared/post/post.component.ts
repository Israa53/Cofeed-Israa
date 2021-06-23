import { PostData } from './../../models/post';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() posts: PostData;
  @Input() latestPost?: boolean;
  @Output() postLoved = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  loved(id: number) {
    this.postLoved.emit(id);
  }
}
