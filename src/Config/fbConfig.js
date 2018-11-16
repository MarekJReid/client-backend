
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDqR2mi-guH-wMvQ07l4kqPOT67YXJgxYs",
    authDomain: "client-backend-e63ff.firebaseapp.com",
    databaseURL: "https://client-backend-e63ff.firebaseio.com",
    projectId: "client-backend-e63ff",
    storageBucket: "client-backend-e63ff.appspot.com",
    messagingSenderId: "1086349386336"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true})
 
export default firebase