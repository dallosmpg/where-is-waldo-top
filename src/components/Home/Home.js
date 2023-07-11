import React from "react";
import './Home.css';

import { Link } from "react-router-dom";
import uniqid from 'uniqid';

export default function Home({images, imageImport, setGameImage}) {
    const levelCards = [];

    for (const img in images) {
        const imgObj = images[img];
        const levelCardElem = (
            <Link to="/game" key={uniqid()} onClick={() => setGameImage(img)}>
                <div className="level-card">
                    <div className="img-wrapper">
                        <img alt="Game demonstartion" src={imageImport[imgObj.imgSrc]} />
                    </div>
                    <div className="flex-center text-content">
                        <h3>Level {imgObj.level}</h3>
                        <div className="flex-center characters-showcase">
                            {imgObj.charactersOnImg.map(char => {
                                return (
                                    <img alt={char} src={imageImport.utility[char]} ></img>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Link>
        );
        levelCards.push(levelCardElem);
    }

    return (
        <main className="flex-center">
            {levelCards}
        </main>
    )
}