// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApzRQN0fj8pLF0UZz12njJlHVFgEFoI2s",
  authDomain: "shop-c082e.firebaseapp.com",
  projectId: "shop-c082e",
  storageBucket: "shop-c082e.appspot.com",
  messagingSenderId: "832177367410",
  appId: "1:832177367410:web:07a7a1c36a824b8c9355eb",
  measurementId: "G-2M5XLGRF52",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
