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
  query,
  getDocs,
  where,
} from 'firebase/firestore';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [charactersFound, setCharactersFound] = useState([]);
  const [latestCompletionTime, setLatestCompletionTime] = useState(0);
  const [gameImageName, setGameImageName] = useState('waldoSnow');
  
  useEffect(() => {
    async function testFirebase() {
      try {
        const db = getFirestore();
        const imagesCollectionRef = collection(db, 'imageSolutions');
    
        // Create a query to get the specific image document based on the image name
        const q = query(imagesCollectionRef, gameImageName);
    
        // Execute the query and get the result
        const querySnapshot = await getDocs(q);
    
        // If the document with the given image name exists, extract the solutions
        if (!querySnapshot.empty) {
          const imageData = querySnapshot.docs[0].data();
          const imageSolutions = imageData.solutions;
          console.log(imageSolutions);
          return imageSolutions;
        } else {
          console.log(`No document found for image: ${gameImageName}`);
          return null;
        }
      } catch (error) {
        console.error('Error querying Firestore:', error);
        return null;
      }
    }
    testFirebase()
  }, [])

  function checkIfPlayerFoundCharacter(clickXAxis, clickYAxis, imgName, charName) {

    const solution = images[imgName].solutions[charName];

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
