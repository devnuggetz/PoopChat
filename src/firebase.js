import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCKs6AmyrULkr1MkAlVQ8QSLlCJ-7ldEDA",
    authDomain: "poopchat-3a096.firebaseapp.com",
    databaseURL: "https://poopchat-3a096.firebaseio.com",
    projectId: "poopchat-3a096",
    storageBucket: "poopchat-3a096.appspot.com",
    messagingSenderId: "280651147103",
    appId: "1:280651147103:web:ab41a5772b4f0b97fbf8ea",
    measurementId: "G-M5VBXDV9MS"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;