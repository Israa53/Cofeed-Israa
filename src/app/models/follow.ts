import { UserAccountData } from "./user";

export interface Follow {
    account: UserAccountData;
    follow: boolean

}

export const followers: Follow[] = [
    {
        account: {
            accountFullName: 'Mai Allam',
            accountImage: './../../../assets/images/user7.jpg',
            accountUserName: '@m.allam10'
        },
        follow: false
    },
    {
        account: {
            accountFullName: 'Maisra Medhet',
            accountImage: './../../../assets/images/user5.png',
            accountUserName: '@m.medhet57'
        },
        follow: true
    },
    {
        account: {
            accountFullName: 'Alaa Mohamed',
            accountImage: './../../../assets/images/user3.jpg',
            accountUserName: '@a.mohamed66'
        },
        follow: false
    }
]
    ;