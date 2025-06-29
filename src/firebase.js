// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAmZYGcJlC8GQNTZewIZV_rewU9I3VsKc",
  authDomain: "food-app-1e61e.firebaseapp.com",
  projectId: "food-app-1e61e",
  storageBucket: "food-app-1e61e.appspot.com", // ✅ Fixed here
  messagingSenderId: "1054513221458",
  appId: "1:1054513221458:web:463ffe41b94a9e0cc5b48b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
