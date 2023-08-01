import React, {useEffect, useState} from 'react';
import './App.css';

import { HashRouter as Router, BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Gameboard from './components/Gameboard/Gameboard';
import queryImageSolutions from './backend/imageSolution';
import { uploadImageHighscoresToFirestore } from './backend/imageHighscore';

import images from "./images";
import imageImport from './image_import';
import imageSolutions from './imageSolutions';
import { uploadImageSolutions } from './backend/imageSolution';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [charactersFound, setCharactersFound] = useState([]);
  const [latestCompletionTime, setLatestCompletionTime] = useState(0);
  const [gameImageName, setGameImageName] = useState('waldoSnow');

  // uploadImageSolutions(imageSolutions);   
  

  async function checkIfPlayerFoundCharacter(clickXAxis, clickYAxis, imgName, charName) {
    const solution = await queryImageSolutions(imgName, charName);
    console.log(solution);

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
