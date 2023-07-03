import React, {useState} from 'react';
import './App.css';

import Header from './components/Header/Header';

import img1 from './images/wallpaperflare.com_wallpaper.jpg' ;

import { initializeApp } from "firebase/app";
import { firebaseConfig } from './backend/firebase';
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
  const [seconds, setSeconds] = useState(0);

  return (
      <div className='grid-center wrapper'>
        <Header setSeconds={setSeconds} seconds={seconds} />
        <img src={img1} alt='test'></img>
      </div>
      );
}

export default App;
