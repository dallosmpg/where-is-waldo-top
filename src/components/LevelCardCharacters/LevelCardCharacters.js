import React from "react";

export default function LevelCardCharacters({levelCharacters, imageImport}) {
    const levelCharacterImgs = levelCharacters.map((char, i) => {
        return (
            <img key={i} alt={char} src={imageImport.utility[char]}></img>
            )
        })
        
    return (
        <div>{levelCharacterImgs}</div>
    ) 
}