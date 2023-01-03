import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyDa0EAbJhxZ4sNjDB10BnB5m783_JlCZak",
  authDomain: "netflix-f5fe2.firebaseapp.com",
  projectId: "netflix-f5fe2",
  storageBucket: "netflix-f5fe2.appspot.com",
  messagingSenderId: "854024881142",
  appId: "1:854024881142:web:a922b3b65e7a2caa91bdd7",
  measurementId: "G-5LJSRGS3C6"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
 