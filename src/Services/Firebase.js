// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0Qqlm_wRzwlF0rD9-usy7-nyNAc-ekDI",
  authDomain: "chatvirtual-207f7.firebaseapp.com",
  databaseURL: "https://chatvirtual-207f7-default-rtdb.firebaseio.com",
  projectId: "chatvirtual-207f7",
  storageBucket: "chatvirtual-207f7.appspot.com",
  messagingSenderId: "1027924159018",
  appId: "1:1027924159018:web:4a6977b3b080b7ecf47153",
  measurementId: "G-7MFCKQ0KK8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);