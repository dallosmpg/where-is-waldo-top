import React, {useEffect, useState} from 'react';
import './App.css';

import { HashRouter as Router, BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Gameboard from './components/Gameboard/Gameboard';

import images from "./images";
import imageImport from './image_import';
import imageSolutions from './imageSolutions';

import { initializeApp } from "firebase/app";
import { firebaseConfig } from './backend/firebase';
import {
  getFirestore,
  collection,
  doc,
  getDoc
} from 'firebase/firestore';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [charactersFound, setCharactersFound] = useState([]);
  const [latestCompletionTime, setLatestCompletionTime] = useState(0);
  const [gameImageName, setGameImageName] = useState('waldoSnow');
  
  async function queryImageSolutions(imageName, charName) {
    try {
      const db = getFirestore();
      const imageDocRef = doc(collection(db, 'imageSolutions'), imageName);
      const imageSnapshot = await getDoc(imageDocRef);
  
      if (imageSnapshot.exists()) {
        const imageData = imageSnapshot.data();
        return imageData.solutions[charName];
      } else {
        console.log(`No image solution found for image: ${imageName}`);
        return null;
      }
    } catch (error) {
        console.error('Error querying Firestore:', error);
        return null;
    }
  }

  async function checkIfPlayerFoundCharacter(clickXAxis, clickYAxis, imgName, charName) {
    const solution = await queryImageSolutions(imgName, charName);

    if ((clickXAxis >= solution.xAxis && clickXAxis <= solution.xAxisEnd) && 
    (clickYAxis >= solution.yAxis && clickYAxis <= solution.yAxisEnd)) {
      console.log(`Found ${charName} on ${imgName}`);
      return {found: true, charName, imgName};
    } else {
      console.log(`Not found ${charName} on ${imgName}`);
      return {found: false, charName, imgName};
    }
  }

  return (
      <BrowserRouter>
        <div className='grid-center wrapper'>
          <Header isGameRunning={isGameRunning} setIsGameRunning={setIsGameRunning} setSeconds={setSeconds} seconds={seconds} />
          <Routes>
            <Route path='/' element={<Home setIsGameRunning={setIsGameRunning} imageImport={imageImport} setGameImageName={setGameImageName} images={images} />} />
            <Route path='/game' element={<Gameboard latestCompletionTime={latestCompletionTime} imageImport={imageImport} seconds={seconds} setLatestCompletionTime={setLatestCompletionTime} setIsGameRunning={setIsGameRunning} charactersFound={charactersFound} setCharactersFound={setCharactersFound} checkIfPlayerFoundCharacter={checkIfPlayerFoundCharacter} images={images} isGameRunning={isGameRunning}  gameImageName={gameImageName} />} />
          </Routes>
        </div>
      </BrowserRouter>
      );
}

export default App;
