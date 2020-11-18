import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDKDks-qvIJgXs0HOKPohRPxOq2wsHu-hA",
  authDomain: "barter-f67ba.firebaseapp.com",
  databaseURL: "https://barter-f67ba.firebaseio.com",
  projectId: "barter-f67ba",
  storageBucket: "barter-f67ba.appspot.com",
  messagingSenderId: "923883801153",
  appId: "1:923883801153:web:0949c90d606c061adcd4c0"
};
// Initialize Firebase
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
