import React, { useEffect } from "react";
import './Popupmenu.css';

export default function Popupmenu({xAxis, yAxis, images, gameImageName, checkIfPlayerFoundCharacter}) {

    useEffect(() => {
        console.log({xAxis, yAxis});
    }, [])

    const style = {
        left: xAxis,
        top: yAxis,
    }

    const charsOnImgLiItems = images[gameImageName].charactersOnImg.map((char, i) => {
        return (
        <li onClick={() => checkIfPlayerFoundCharacter(xAxis, yAxis, gameImageName, char)} key={i}>{char}</li>
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