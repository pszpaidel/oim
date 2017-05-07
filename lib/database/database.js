import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAA20qbozYFSehQJAMVeWFBqigtaZERuwM',
  authDomain: 'cookbook-c9156.firebaseapp.com',
  databaseURL: 'https://cookbook-c9156.firebaseio.com',
  storageBucket: 'cookbook-c9156.appspot.com',
};

firebase.initializeApp(config);

export const database = firebase.database();
export const storage = firebase.storage();

