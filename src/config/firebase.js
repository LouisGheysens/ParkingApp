import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBtT6STYIHus0eeFlvx6WHaUY-9QmMG0wg",
    authDomain: "mobile-ba8d0.firebaseapp.com",
    projectId: "mobile-ba8d0",
    storageBucket: "mobile-ba8d0.appspot.com",
    messagingSenderId: "874123927447",
    appId: "1:874123927447:web:7f2c16865c29383d5baed2"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);