import React, { useEffect } from "react";
import './Popupmenu.css';

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
        <li onClick={() => {
            const playerFoundCharObj = checkIfPlayerFoundCharacter(xAxis, yAxis, gameImageName, char);

            if (playerFoundCharObj.found) {
                setCharactersFound(prevCharsFound => [...prevCharsFound, playerFoundCharObj.charName])
            } 

            setPopupVisibility();
        }} key={i}>
            
            {char}
        </li>
        ) 
    })

    return (
        <div className="popup-menu" style={style}>
            <ul>
                {charsOnImgLiItems}
            </ul>
        </div>
    )
}