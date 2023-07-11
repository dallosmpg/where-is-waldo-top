import React from "react";
import './Home.css';

export default function Home({images, imageImport, setGameImage}) {
    const levelCards = [];

    for (const img in images) {
        const imgObj = images[img];
        const levelCardElem = (
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
        );
        levelCards.push(levelCardElem);
    }

    return (
        <main className="flex-center">
            {levelCards.map(levelCard => levelCard)}
        </main>
    )
}