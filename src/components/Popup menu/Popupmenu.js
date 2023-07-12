import React, { useEffect } from "react";
import './Popupmenu.css';

import PopupMenuListItem from "../PopupMenuListItem/PopupMenuListItem";

export default function Popupmenu({xAxis, yAxis, images, gameImageName, checkIfPlayerFoundCharacter, setPopupVisibility, charactersFound, setCharactersFound, setIsGameRunning}) {

    useEffect(() => {
        console.log({xAxis, yAxis});
    }, [])

    const style = {
        left: xAxis,
        top: yAxis,
    }

    const charsOnImgLiItems = images[gameImageName].charactersOnImg.map((char, i) => {
        if(charactersFound.includes(char)) return null;
        return (
            <PopupMenuListItem key={i} checkIfPlayerFoundCharacter={checkIfPlayerFoundCharacter} xAxis={xAxis} yAxis={yAxis} gameImageName={gameImageName} char={char} setCharactersFound={setCharactersFound} setPopupVisibility={setPopupVisibility} />
        )
    });

    return (
        <div className="popup-menu" style={style}>
            <ul>
                {charsOnImgLiItems}
            </ul>
        </div>
    )
}

