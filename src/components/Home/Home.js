import React, {useState, useEffect} from "react";
import './Home.css';

// * Dependencies
import uniqid from 'uniqid';

// * Imported components
import LevelCard from "../LevelCard/LevelCard";

export default function Home({images, imageImport, setGameImageName, setIsGameRunning}) {
    // * Home states
    const [levelCards, setLevelCards] = useState([]);

    useEffect(() => {
        // * Create levelCard components from image data
        for (const imgKey in images) {
            const imgObj = images[imgKey];
                const levelCardElem = (
                <LevelCard  key={uniqid()} setIsGameRunning={setIsGameRunning} setGameImageName={setGameImageName} imgObj={imgObj} imageImport={imageImport}  />
            );
            setLevelCards(prevLevelCards => [...prevLevelCards, levelCardElem]);
        }       
    }, [images]);

    // * Return JSX
    return (
        <main className="flex-center">
            {levelCards}
        </main>
    )
}