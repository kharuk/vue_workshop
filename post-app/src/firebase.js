import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebase init - add your own config here
const firebaseConfig = {
  databaseURL: 'https://post-sharing-dcbdb.firebaseio.com',
  apiKey: 'AIzaSyD8Q6Bp9m_9GsgQt86l1unyWWbVDoXqCgo',
  authDomain: 'post-sharing-dcbdb.firebaseapp.com',
  projectId: 'post-sharing-dcbdb',
  storageBucket: 'post-sharing-dcbdb.appspot.com',
  messagingSenderId: '735747730743',
  appId: '1:735747730743:web:de440209001c9822aabeb2',
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection('users');
const postsCollection = db.collection('posts');
const commentsCollection = db.collection('comments');
const likesCollection = db.collection('likes');

export { db, auth, usersCollection, postsCollection, commentsCollection, likesCollection };
