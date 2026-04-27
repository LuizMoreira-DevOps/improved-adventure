import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAEzbjVrxBSsMoJFsppgWrFyj0OqhHURk",
  authDomain: "somativa-dois.firebaseapp.com",
  projectId: "somativa-dois",
  storageBucket: "somativa-dois.firebasestorage.app",
  messagingSenderId: "835613018472",
  appId: "1:835613018472:web:7a48062414dee50ea96edd",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
