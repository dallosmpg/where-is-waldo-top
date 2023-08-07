import React, { useState } from 'react';
import './App.css';

// TODO Revert to HashRouter once project is done! (DevServer supports BrowserRouter, BUT GHPages supports HashRouter!)
import { HashRouter as Router, BrowserRouter, Routes, Route } from "react-router-dom";

// * Imported components
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Gameboard from './components/Gameboard/Gameboard';

// * Imported dependencies from other files
import queryImageSolutions from './backend/imageSolution';
import images from "./images";
import imageImport from './image_import';

function App() {
  // * App states
  const [seconds, setSeconds] = useState(0);
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [charactersFound, setCharactersFound] = useState([]);
  const [latestCompletionTime, setLatestCompletionTime] = useState(0);
  const [gameImageName, setGameImageName] = useState('waldoSnow');
  
  async function checkIfPlayerFoundCharacter(clickXAxis, clickYAxis, imgName, charName) {
    const solution = await queryImageSolutions(imgName, charName);
    console.log(solution);

    // * Checking if click coordinates are in the solution box -> returning object with result and data
    if ((clickXAxis >= solution.xAxis && clickXAxis <= solution.xAxisEnd) && 
    (clickYAxis >= solution.yAxis && clickYAxis <= solution.yAxisEnd)) {
      console.log(`Found ${charName} on ${imgName}`);
      return {found: true, charName, imgName};
    } else {
      console.log(`Not found ${charName} on ${imgName}`);
      return {found: false, charName, imgName};
    }
  }

  // * Returned JSX
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
