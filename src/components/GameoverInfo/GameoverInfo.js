import React from "react";
import './GameoverInfo.css';

// * NPM Dependencies
import { Link } from "react-router-dom";

// * Imported components
import Highscore from "../Highscore/Highscore";


export default function GameoverInfo({latestCompletionTime, setIsGameRunning, setCharactersFound, gameImageName}) {
    function restartGame() {
        setIsGameRunning(true);
        setCharactersFound([]);
    }

    function resetGame() {
        setCharactersFound([]);
    }

    // * Return JSX
    return (
        <div className="gameover-info flex-center">
            <div className="level flex-center-column">
                <div className="text">
                    <h2>Congrats!</h2>
                    <h3>You have finished the level in {latestCompletionTime} seconds!</h3>
                </div>
                <div className="buttons flex-center">
                    <Link onClick={resetGame} to={"/"}><button>Return to main menu</button></Link>
                    <button onClick={restartGame} className="green">Restart level</button>
                </div>
            </div>
            <Highscore gameImageName={gameImageName} latestCompletionTime={latestCompletionTime} />
        </div>
    )
}