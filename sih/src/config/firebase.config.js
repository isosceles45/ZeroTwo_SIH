// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAf1tjP6Z-jBJXxHjmZqUIceugUClGNjm0",
  authDomain: "zerotwo-sih.firebaseapp.com",
  projectId: "zerotwo-sih",
  storageBucket: "zerotwo-sih.appspot.com",
  messagingSenderId: "1020992742129",
  appId: "1:1020992742129:web:9151dcff875d3cea5a7f50",
  measurementId: "G-BH6NW8L85G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
