// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgwcaFa1t4yH5q60tc6eTScjFxNhh1v_U",
  authDomain: "interactive-contact-book.firebaseapp.com",
  projectId: "interactive-contact-book",
  storageBucket: "interactive-contact-book.appspot.com",
  messagingSenderId: "718762156448",
  appId: "1:718762156448:web:2a41c9ea1841742ec644c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
