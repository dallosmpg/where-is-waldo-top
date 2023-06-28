import './App.css';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase';
import {
  firestore,
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';


function App() {
  const app = initializeApp(firebaseConfig);

  // addDoc(collection(getFirestore(), 'users'), {
  //   name: 'János',
  //   age: 24,
  // })

  return (
    <h1>Hello from App</h1>
  );
}

export default App;
