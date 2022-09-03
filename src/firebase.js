// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDdyDkCEJ-kpD3S6mjY6yKmzz4OyRqinV0",
  authDomain: "blog-4386b.firebaseapp.com",
  databaseURL: "https://blog-4386b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blog-4386b",
  storageBucket: "blog-4386b.appspot.com",
  messagingSenderId: "539684986719",
  appId: "1:539684986719:web:40a9c6250e33be9f4160ea",
  measurementId: "G-4LPH7QWMP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)