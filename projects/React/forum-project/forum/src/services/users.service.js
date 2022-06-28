import { get, set, ref, query, equalTo, orderByChild, update } from 'firebase/database';
import { db } from '../config/firebase-config';

export const getUsersCount = () => {

  return get(ref(db, 'users'))
    .then(snapshot => {
      if (!snapshot.exists()) {
        return 0;
      }

      const usersDocument = snapshot.val();

      return Object.keys(usersDocument).length;
    });
};

export const getAllUsers = () => {

  return get(ref(db, 'users'))
    .then(snapshot => {
      if (!snapshot.exists()) {
        return [];
      }

      const usersDocument = snapshot.val();
      return Object.keys(usersDocument).map(key => {
        const user = usersDocument[key];
    
        return {
          ...user
        };
      });
    });
};


export const getUserByUsername = (username) => {

  return get(ref(db, `users/${username}`));
};

export const createUsername = (username, uid, email, firstName, lastName) => {

  return set(ref(db, `users/${username}`), { username, uid, email, firstName, lastName, createdOn: new Date(), likedPosts: {}, isAdmin: false });
};

export const getUserData = (uid) => {

  return get(query(ref(db, 'users'), orderByChild('uid'), equalTo(uid)));
};

export const updateUserProfilePicture = (username, url) => {
  return update(ref(db), {
    [`users/${username}/avatarUrl`]: url,
  });
};

export const updateUserData = (username, firstName, lastName, email) => {
  return update(ref(db), {
    [`users/${username}/firstName`]: firstName,
    [`users/${username}/lastName`]: lastName,
    [`users/${username}/email`]: email,
  });
};