import React from "react";
import './Home.css';

import LevelCard from "../LevelCard/LevelCard";

export default function Home({images, imageImport, setGameImage, imgKey}) {
    const levelCards = [];

    for (const imgKey in images) {
        const imgObj = images[imgKey];
        const levelCardElem = (
            <LevelCard setGameImage={setGameImage} imgObj={imgObj} imageImport={imageImport}  />
        );
        levelCards.push(levelCardElem);
    }

    return (
        <main className="flex-center">
            {levelCards}
        </main>
    )
}