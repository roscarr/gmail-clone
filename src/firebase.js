import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAaG97MlhPgCrJpKwd1a3xigK0S7GubKHk",
  authDomain: "clone-a74e4.firebaseapp.com",
  projectId: "clone-a74e4",
  storageBucket: "clone-a74e4.appspot.com",
  messagingSenderId: "538237937110",
  appId: "1:538237937110:web:5b6f147e19d8dbcd36f077"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};