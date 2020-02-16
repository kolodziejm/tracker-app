import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCmjOqWGCo8xdgmaIQ4hCtz-w10KrpWXh0',
  authDomain: 'nf-tracker.firebaseapp.com',
  databaseURL: 'https://nf-tracker.firebaseio.com',
  projectId: 'nf-tracker',
  storageBucket: 'nf-tracker.appspot.com',
  messagingSenderId: '1098223156935',
  appId: '1:1098223156935:web:c7cfcc1f1043b7344988e2',
  measurementId: 'G-2D5TXW429T',
};

class Firebase {
  app: firebase.app.App;

  auth: firebase.auth.Auth;

  constructor() {
    this.app = firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();

    firebase.analytics();
  }

  createUserWithEmailAndPassword = () => this.auth.createUserWithEmailAndPassword;

  signInWithEmailAndPassword = () => this.auth.signInWithEmailAndPassword;

  signOut = () => this.auth.signOut();
}

export default Firebase;
