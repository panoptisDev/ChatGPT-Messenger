import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBD6U3E8jsDPXpqidTsMXtAKLjs-MyZN0k",
  authDomain: "chatgpt-messenger-clone-accad.firebaseapp.com",
  projectId: "chatgpt-messenger-clone-accad",
  storageBucket: "chatgpt-messenger-clone-accad.appspot.com",
  messagingSenderId: "395595751826",
  appId: "1:395595751826:web:b1c887b211797c604d214b"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };