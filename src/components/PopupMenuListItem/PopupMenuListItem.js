import React from "react";

export default function PopupMenuListItem({checkIfPlayerFoundCharacter, xAxis, yAxis, gameImageName, char, setCharactersFound, setPopupVisibility}) {

    return (
        <li onClick={() => {
            const playerFoundCharObj = checkIfPlayerFoundCharacter(xAxis, yAxis, gameImageName, char);

            if (playerFoundCharObj.found) {
                setCharactersFound(prevCharsFound => [...prevCharsFound, playerFoundCharObj.charName])
            } 

            setPopupVisibility();
        }}>  
            {char}
        </li>
    )
}