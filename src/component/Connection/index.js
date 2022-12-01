import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDT-3Bmd4_H9olAFGRzn5R9bCZEthwU7ZU',
  authDomain: 'olshop-f2b66.firebaseapp.com',
  projectId: 'olshop-f2b66',
  storageBucket: 'olshop-f2b66.appspot.com',
  messagingSenderId: '1083559942291',
  appId: '1:1083559942291:web:38c0bbeafeae104d8b5566',
  measurementId: 'G-YHWPZMMZ66',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase};
