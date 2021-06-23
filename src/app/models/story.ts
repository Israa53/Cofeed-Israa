import { UserAccountData } from "./user";

export interface Story {
    account: UserAccountData;
    myStory: boolean;
    seen: boolean;
}
 export const stories: Story[] = [
    {
      account: {
        accountName: 'You',
        accountImage: '../../../assets/images/user.jpg',
      },
      myStory: true,
      seen: false,
    },
    {
      account: {
        accountName: 'Mohamed',
        accountImage: '../../../assets/images/user4.png',
      },
      myStory: false,
      seen: true,
    },
    {
      account: {
        accountName: 'Alaa',
        accountImage: '../../../assets/images/user3.jpg',
      },
      myStory: false,
      seen: false,
    },

    {
      account: {
        accountName: 'Ahmed',
        accountImage: '../../../assets/images/user2.jpg',
      },
      myStory: false,
      seen: true,
    },
    {
      account: {
        accountName: 'Renad',
        accountImage: '../../../assets/images/user7.jpg',
      },
      myStory: false,
      seen: false,
    },
    {
      account: {
        accountName: 'Ali',
        accountImage: '../../../assets/images/user6.jpg',
      },
      myStory: false,
      seen: false,
    },
    {
      account: {
        accountName: 'Adam',
        accountImage: '../../../assets/images/user5.png',
      },
      myStory: false,
      seen: false,
    },
  ];