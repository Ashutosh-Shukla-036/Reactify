import { atom } from 'recoil';

export const userAtom = atom({
  key: 'userAtom',
  default: null,
  effects: [
    ({ setSelf, onSet }) => {
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        setSelf(JSON.parse(storedUser));
      }

      onSet(newUser => {
        if (newUser) {
          sessionStorage.setItem('user', JSON.stringify(newUser));
        } else {
          sessionStorage.removeItem('user');
          sessionStorage.removeItem('token'); 
        }
      });
    }
  ]
});