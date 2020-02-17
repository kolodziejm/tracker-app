import app from 'firebase/app';
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
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  createUserWithEmailAndPassword(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut = () => this.auth.signOut()
}

export default Firebase;
