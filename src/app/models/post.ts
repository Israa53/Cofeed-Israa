import { UserAccountData } from './user';

export interface PostData {
    imageUrl: string;
    account: UserAccountData;
    likes?: number;
    comments?: number;
    liked?: boolean;
    id: number;
}
export const posts: PostData[] = [
    {
      imageUrl: '../../../assets/images/post1.jpg',
      account: {
        accountFullName: 'Mohamed Alaa',
        accountImage: './../../../assets/images/user4.png',
      },
      likes: 5,
      comments: 15,
      liked: false,
      id: 1
    },
    {
      imageUrl: '../../../assets/images/post2.jpg',
      account: {
        accountFullName: 'Mai Allam',
        accountImage: './../../../assets/images/user3.jpg',
      },
      likes: 75,
      comments: 33,
      liked: false,
      id: 2
    },
    {
      imageUrl: '../../../assets/images/post3.jpg',
      account: {
        accountFullName: 'Ali Hassan',
        accountImage: '../../../assets/images/user2.jpg',
      },
      likes: 80,
      comments: 123,
      liked: false,
      id: 3
    },
    {
      imageUrl: '../../../assets/images/post4.jpg',
      account: {
        accountFullName: 'Renad Mohamed',
        accountImage: '../../../assets/images/user7.jpg',
      },
      likes: 60,
      comments: 17,
      liked: false,
      id: 4
    }
];