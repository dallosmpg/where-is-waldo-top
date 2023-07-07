import React, {useEffect, useState} from "react";
import './Gameboard.css';

import Popupmenu from "../Popup menu/Popupmenu";

export default function Gameboard({seconds, setLatestCompletionTime, gameImage, isGameRunning, images, gameImageName, checkIfPlayerFoundCharacter, charactersFound, setCharactersFound, setIsGameRunning}) {
    const [xAxis, setXAxis] = useState(0);
    const [yAxis, setYAxis] = useState(0);
    const [popupIsVisible, setPopupIsVisible] = useState(false);

    useEffect(() => {
        if (charactersFound.length === images[gameImageName].charactersOnImg.length) {
            console.log('stopping game');
            setIsGameRunning(false);
            console.log(seconds);
            setLatestCompletionTime(seconds);
        }
    }, [charactersFound]);

    function setPopupAxis(e) {
        setXAxis(e.nativeEvent.layerX);
        setYAxis(e.nativeEvent.layerY);
    }

    function setPopupVisibility() {
        setPopupIsVisible(prevVis => !prevVis);
    }
    
    return (
        <div className="gameboard">
            <img onClick={(e) => {
                setPopupAxis(e);
                setPopupVisibility();
            }} src={gameImage} alt='test'></img>
            {popupIsVisible && isGameRunning ? <Popupmenu setIsGameRunning={setIsGameRunning} charactersFound={charactersFound} setCharactersFound={setCharactersFound} setPopupVisibility={setPopupVisibility} checkIfPlayerFoundCharacter={checkIfPlayerFoundCharacter} gameImageName={gameImageName} images={images} xAxis={xAxis} yAxis={yAxis} /> : ''}
        </div>
    )
}