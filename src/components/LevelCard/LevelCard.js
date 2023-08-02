import React from "react";

// * NPM dependencies
import { Link } from "react-router-dom";
import uniqid from 'uniqid';

// * Imported components
import LevelCardCharacters from "../LevelCardCharacters/LevelCardCharacters";

export default function LevelCard({imageImport, imgObj, setGameImageName, setIsGameRunning}) {

    return (
    <Link to="/game" key={uniqid()} >
        <div className="level-card" onClick={() => {
            // * Start & setup game
            setGameImageName(imgObj.imgSrc);
            setIsGameRunning(true)
            }}>
            <div className="img-wrapper">
                <img alt="Game demonstartion" src={imageImport[imgObj.imgSrc]} />
            </div>
            <div className="flex-center text-content">
                <h3>Level {imgObj.level}</h3>
                <div className="flex-center characters-showcase">
                    <LevelCardCharacters levelCharacters={imgObj.charactersOnImg} imageImport={imageImport} />
                </div>
            </div>
        </div>
    </Link>
    )
}

