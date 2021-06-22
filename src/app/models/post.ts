import { UserAccountData } from './user';

export interface PostData {
    imageUrl: string;
    account: UserAccountData;
    likes?: number;
    comments?: String[];
}