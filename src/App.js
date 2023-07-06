import React, {useState} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Gameboard from './components/Gameboard/Gameboard';

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
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  return (
      <div className='grid-center wrapper'>
        <Header isTimerRunning={isTimerRunning} setIsTimerRunning={setIsTimerRunning} setSeconds={setSeconds} seconds={seconds} />
        <Gameboard gameImage={img1} />
      </div>
      );
}

export default App;
