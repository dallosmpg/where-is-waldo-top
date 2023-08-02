import React, {useEffect, useState} from "react";
import './Gameboard.css';

// * Imported components
import Popupmenu from "../Popup menu/Popupmenu";
import GameoverInfo from "../GameoverInfo/GameoverInfo";

export default function Gameboard({seconds, latestCompletionTime, setLatestCompletionTime, isGameRunning, images, gameImageName, imageImport, checkIfPlayerFoundCharacter, charactersFound, setCharactersFound, setIsGameRunning}) {
    const [xAxis, setXAxis] = useState(0);
    const [yAxis, setYAxis] = useState(0);
    const [popupIsVisible, setPopupIsVisible] = useState(false);

    useEffect(() => {
        // * Check if all characters are found... 
        if (charactersFound.length === images[gameImageName].charactersOnImg.length) {
            // * ...and stop if they are
            stopGame();
        }
        function stopGame() {
            setIsGameRunning(false);
            setLatestCompletionTime(seconds);
        }
    }, [charactersFound]);

    function setPopupAxis(e) {
        // * Setting the popup character select modals coordinates
        setXAxis(e.nativeEvent.layerX);
        setYAxis(e.nativeEvent.layerY);
    }

    function setPopupVisibility() {
        setPopupIsVisible(prevVis => !prevVis);
    }
    
    // * Return JSX
    return (
        <div className="gameboard">
            <img onClick={(e) => {
                setPopupAxis(e);
                setPopupVisibility();
            }} src={imageImport[gameImageName]} alt='test'></img>
            {popupIsVisible && isGameRunning ? <Popupmenu setIsGameRunning={setIsGameRunning} charactersFound={charactersFound} setCharactersFound={setCharactersFound} setPopupVisibility={setPopupVisibility} checkIfPlayerFoundCharacter={checkIfPlayerFoundCharacter} gameImageName={gameImageName} images={images} xAxis={xAxis} yAxis={yAxis} /> : ''}
            {!isGameRunning ? <GameoverInfo gameImageName={gameImageName} setCharactersFound={setCharactersFound} setIsGameRunning={setIsGameRunning} latestCompletionTime={latestCompletionTime} /> : null}
        </div>
    )
}