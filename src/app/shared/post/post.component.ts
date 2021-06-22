import { PostData } from './../../models/post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  posts: PostData[] = [
    {
      imageUrl: '../../../assets/images/post1.jpg',
      account: {
        accountFullName: 'Mohamed Alaa',
        accountImage: './../../../assets/images/user4.png',
      },
      likes: 5
    },
    {
      imageUrl: '../../../assets/images/post2.jpg',
      account: {
        accountFullName: 'Mai Allam',
        accountImage: './../../../assets/images/user3.jpg',
      },
      likes: 75
    },
    {
      imageUrl: '../../../assets/images/post3.jpg',
      account: {
        accountFullName: 'Ali Hassan',
        accountImage: '../../../assets/images/user2.jpg',
      },
      likes: 80
    },
    {
      imageUrl: '../../../assets/images/post4.jpg',
      account: {
        accountFullName: 'Renad Mohamed',
        accountImage: '../../../assets/images/user7.jpg',
      },
      likes: 60
    },
    // {
    //   imageUrl: '../../../assets/images/post5.jpg',
    //   account: {
    //     accountFullName: 'Mohamed',
    //     accountImage: '../../../assets/images/user4.png',
    //   },
    //   likes: 10
    // },

  ];
}
