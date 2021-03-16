import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBP_7Vl4gbvN34CEt1FeVqDujgJQBaJgC8',
  authDomain: 'vuejs-live-chat.firebaseapp.com',
  projectId: 'vuejs-live-chat',
  storageBucket: 'vuejs-live-chat.appspot.com',
  messagingSenderId: '74243966430',
  appId: '1:74243966430:web:f3cbf15a06727ab3f2c94f',
  measurementId: 'G-ZX1LSJQ89D',
};

// Initialize firebase app
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, timestamp };
