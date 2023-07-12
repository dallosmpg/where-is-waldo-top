import React from "react";
import './Home.css';

import LevelCard from "../LevelCard/LevelCard";

import uniqid from 'uniqid'

export default function Home({images, imageImport, setGameImageName, setIsGameRunning}) {
    const levelCards = [];

    for (const imgKey in images) {
        const imgObj = images[imgKey];
            const levelCardElem = (
            <LevelCard  key={uniqid()} setIsGameRunning={setIsGameRunning} setGameImageName={setGameImageName} imgObj={imgObj} imageImport={imageImport}  />
        );
        levelCards.push(levelCardElem);
    }   

    return (
        <main className="flex-center">
            {levelCards}
        </main>
    )
}