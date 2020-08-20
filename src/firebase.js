import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBeePjWHCPzHDywNaMetFbCXJxQdOxH0lQ',
  authDomain: 'whats-app-in.firebaseapp.com',
  databaseURL: 'https://whats-app-in.firebaseio.com',
  projectId: 'whats-app-in',
  storageBucket: 'whats-app-in.appspot.com',
  messagingSenderId: '444704443882',
  appId: '1:444704443882:web:a3c8de58f12341b3b83693',
  measurementId: 'G-YP30JF8J3P',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
