import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDVBVR6v0Mzz12yEVAjLWo5JxUNeiqhoRA",
  authDomain: "realfast-37577.firebaseapp.com",
  projectId: "realfast-37577",
  storageBucket: "realfast-37577.appspot.com",
  messagingSenderId: "100739335163",
  appId: "1:303630678875:web:dec26b0ba2d1b35ee0b87e"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const auth = getAuth();

const db = getFirestore(app)

export { auth,db }