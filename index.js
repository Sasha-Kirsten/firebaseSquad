// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxQG7JfBECRHyL8fEU-ZQtEq0h12CK-Hg",
  authDomain: "mynewproject-5673e.firebaseapp.com",
  projectId: "mynewproject-5673e",
  storageBucket: "mynewproject-5673e.appspot.com",
  messagingSenderId: "437106718206",
  appId: "1:437106718206:web:e8b5a1e6c94b190a96bcaf",
  measurementId: "G-T85QDZBZX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);