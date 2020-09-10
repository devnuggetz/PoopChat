import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDuGq8OCO63TRSCupoWdLu5vzrTC4uW1ko",
  authDomain: "poopchat-1.firebaseapp.com",
  databaseURL: "https://poopchat-1.firebaseio.com",
  projectId: "poopchat-1",
  storageBucket: "poopchat-1.appspot.com",
  messagingSenderId: "104396872601",
  appId: "1:104396872601:web:c6542ca035d44ea3ea5108",
  measurementId: "G-C2CCTMB8YQ"
};

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;