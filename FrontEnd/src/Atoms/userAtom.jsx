import { atom } from 'recoil';

export const userAtom = atom({
  key: 'userAtom',
  default: null,
  effects: [
    ({ setSelf, onSet }) => {
      // Load user info from localStorage on initialization
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setSelf(JSON.parse(storedUser));
      }

      onSet(newUser => {
        if (newUser) {
          localStorage.setItem('user', JSON.stringify(newUser));
        } else {
          localStorage.removeItem('user');
          localStorage.removeItem('token'); 
        }
      });
    }
  ]
});