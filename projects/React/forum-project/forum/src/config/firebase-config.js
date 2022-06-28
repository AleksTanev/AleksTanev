import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBGSLMKtd5gdY0fqs6cmkDVgtCGTjcq4EA',
  authDomain: 'react-forum-829ea.firebaseapp.com',
  databaseURL: 'https://react-forum-829ea-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-forum-829ea',
  storageBucket: 'gs://react-forum-829ea.appspot.com',
  messagingSenderId: '697039691682',
  appId: '1:697039691682:web:03db279187ff62c32ddcfb'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);