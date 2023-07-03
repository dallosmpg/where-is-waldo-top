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
import img1 from './images/wallpaperflare.com_wallpaper.jpg' ;

// function addToDB() {
//   console.log('Writing to DB');
//   addDoc(collection(getFirestore(), 'users'), {
//     name: 'János',
//     age: 24,
//   })
  
// }

function App() {
  const app = initializeApp(firebaseConfig);
  return (
    <img src={img1} alt='test'></img>
  );
}

export default App;
