import React, { useState } from "react";

export default function LevelCardCharacters({levelCharacters, imageImport}) {
    // * LevelCardCharacters states
    const [levelCharacterImgs, setLevelCharacterImgs] = useState([])

    // * Create character images on mounting
    useState(() => {
        levelCharacters.forEach((char, i) => {
            const levelCharacterImg = (
                <img key={i} alt={char} src={imageImport.utility[char]}></img>
            );
            setLevelCharacterImgs(prevLevelCharacterImgs => [...prevLevelCharacterImgs, levelCharacterImg]);
        })
    }, [])
        
    // * Return JSX
    return (
        <div>{levelCharacterImgs}</div>
    ) 
}