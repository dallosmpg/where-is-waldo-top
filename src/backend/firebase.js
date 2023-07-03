// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL0bWK40cM0BtzI3eTzYA4M4n5jlLieUg",
  authDomain: "where-is-waldo-top-5e084.firebaseapp.com",
  databaseURL: "https://where-is-waldo-top-5e084-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "where-is-waldo-top-5e084",
  storageBucket: "where-is-waldo-top-5e084.appspot.com",
  messagingSenderId: "226108908446",
  appId: "1:226108908446:web:471101a3660685cd772c8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {firebaseConfig};