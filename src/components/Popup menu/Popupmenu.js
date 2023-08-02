import React, { useEffect, useState } from "react";
import './Popupmenu.css';

// * Imported components
import PopupMenuListItem from "../PopupMenuListItem/PopupMenuListItem";

export default function Popupmenu({xAxis, yAxis, images, gameImageName, checkIfPlayerFoundCharacter, setPopupVisibility, charactersFound, setCharactersFound}) {
    // * Popupmenu states
    const [charsOnImgLiItems, setCharsOnImgLiItems] = useState([]);
    const [style, setStyle] = useState({})

    useEffect(() => {
        // * Set popup's coordinates on page
        setStyle({
            left: xAxis,
            top: yAxis,
        })

        return () => {
            setStyle({});
        }
    }, [])

    useEffect(() => {
        // * Update characters appearing based on found characters
        images[gameImageName].charactersOnImg.forEach((char, i) => {
            if(charactersFound.includes(char)) return;
            const listItem = (
                <PopupMenuListItem key={i} checkIfPlayerFoundCharacter={checkIfPlayerFoundCharacter} xAxis={xAxis} yAxis={yAxis} gameImageName={gameImageName} char={char} setCharactersFound={setCharactersFound} setPopupVisibility={setPopupVisibility} />
            )
            setCharsOnImgLiItems(prevCharsOnImgLiItems => [...prevCharsOnImgLiItems, listItem]);
        });
    }, [charactersFound])

    // * Return JSX
    return (
        <div className="popup-menu" style={style}>
            <ul>
                {charsOnImgLiItems}
            </ul>
        </div>
    )
}

