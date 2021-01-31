import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyApEHInhAEMFwIpI-7oOS1Kr4ODokZst9U",
  authDomain: "barter-system-e0ccb.firebaseapp.com",
  projectId: "barter-system-e0ccb",
  storageBucket: "barter-system-e0ccb.appspot.com",
  messagingSenderId: "367216913399",
  appId: "1:367216913399:web:00d9502698d4cff6d7dcf2"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
