import { UserAccountData } from "./user";

export interface Story {
    account: UserAccountData;
    myStory: boolean;
    seen: boolean;
}