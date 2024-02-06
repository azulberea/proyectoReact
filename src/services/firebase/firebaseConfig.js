import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBalPmtBf0L20BqDjZWplCiemaWWDlMgc0",
  authDomain: "sanriostore-16428.firebaseapp.com",
  projectId: "sanriostore-16428",
  storageBucket: "sanriostore-16428.appspot.com",
  messagingSenderId: "942037956911",
  appId: "1:942037956911:web:23c17f52a78fccc9b3c9da"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)