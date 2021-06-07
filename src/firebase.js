import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBzeBoDoFWAhrYHNsVmV6n4kWUM_AFNRRQ",
  authDomain: "facebook-clone-f5d66.firebaseapp.com",
  projectId: "facebook-clone-f5d66",
  storageBucket: "facebook-clone-f5d66.appspot.com",
  messagingSenderId: "203393276868",
  appId: "1:203393276868:web:8735950bc9457bf6282291",
  measurementId: "G-HEWYKSTTXY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db