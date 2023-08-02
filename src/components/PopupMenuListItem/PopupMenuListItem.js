import React from "react";

export default function PopupMenuListItem({checkIfPlayerFoundCharacter, xAxis, yAxis, gameImageName, char, setCharactersFound, setPopupVisibility}) {
    function handleFoundCharacter(playerFoundCharObj) {
        if (playerFoundCharObj.found) {
            setCharactersFound(prevCharsFound => [...prevCharsFound, playerFoundCharObj.charName])
        } 
    }

    // * Return JSX
    return (
        <li onClick={async () => {
            const playerFoundCharObj = await checkIfPlayerFoundCharacter(xAxis, yAxis, gameImageName, char);
            handleFoundCharacter(playerFoundCharObj);   
            setPopupVisibility();
        }}>  
            {char}
        </li>
    )
}