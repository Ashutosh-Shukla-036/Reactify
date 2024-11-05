import { atom, selector } from 'recoil';
import { GetFriends } from '../API_Calls/GetFriendAPI';
import { userAtom } from './userAtom';

export const friendListAtom = atom({
    key: 'friendListAtom',
    default: []
});