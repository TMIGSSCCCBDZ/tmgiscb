import firebase from 'firebase'

// config file 
const firebaseConfig = {
    apiKey: "AIzaSyAtZwPwPKR3W0qj1vjjSYZBzYALpFeS9Wk",
    authDomain: "tmgiscb-21a84.firebaseapp.com",
    projectId: "tmgiscb-21a84",
    storageBucket: "tmgiscb-21a84.appspot.com",
    messagingSenderId: "853091646972",
    appId: "1:853091646972:web:1fda447f74cee6e8730679"
  };

  // initialize the app 
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage =firebase.storage()

  export default db 
  export {auth, storage}