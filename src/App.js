import React, {useState} from 'react';
import './App.css';

import Header from './components/Header/Header';
import Gameboard from './components/Gameboard/Gameboard';

import images from "./images";
import waldoSnow from './images/wallpaperflare.com_wallpaper.jpg' ;

// import { initializeApp } from "firebase/app";
// import { firebaseConfig } from './backend/firebase';
// import {
//   firestore,
//   getFirestore,
//   collection,
//   addDoc,
//   query,
//   orderBy,
//   limit,
//   onSnapshot,
//   setDoc,
//   updateDoc,
//   doc,
//   serverTimestamp,
// } from 'firebase/firestore';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);

  function checkIfPlayerFoundCharacter(clickXAxis, clickYAxis, imgName, charName) {
    const solution = images[imgName].solutions[charName];
    if ((clickXAxis >= solution.xAxis && clickXAxis <= solution.xAxisEnd) && 
    (clickYAxis >= solution.yAxis && clickYAxis <= solution.yAxisEnd)) {
      console.log(`Found ${charName} on ${imgName}`);
    } else {
      console.log(`Not found ${charName} on ${imgName}`);
    }
  }

  return (
      <div className='grid-center wrapper'>
        <Header isTimerRunning={isGameRunning} setIsTimerRunning={setIsGameRunning} setSeconds={setSeconds} seconds={seconds} />
        <Gameboard checkIfPlayerFoundCharacter={checkIfPlayerFoundCharacter} images={images} isGameRunning={isGameRunning} gameImage={waldoSnow} gameImageName={'waldoSnow'} />
      </div>
      );
}

export default App;
