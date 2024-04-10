import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDfjstjA-lbFb19npmuVtgjpiQ9VpacbEU",
  authDomain: "stuvent-97fed.firebaseapp.com",
  projectId: "stuvent-97fed",
  storageBucket: "stuvent-97fed.appspot.com",
  messagingSenderId: "743752391358",
  appId: "1:743752391358:web:42e00cff3bec9f4f3c5cef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage= getStorage();
export const db=getFirestore();