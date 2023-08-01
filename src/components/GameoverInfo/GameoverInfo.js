import React from "react";
import './GameoverInfo.css';

import Highscore from "../Highscore/Highscore";
import highscore from '../../highscore';

import { Link } from "react-router-dom";

export default function GameoverInfo({latestCompletionTime, setIsGameRunning, setCharactersFound, gameImageName}) {
    function restartGame() {
        setIsGameRunning(true)
        setCharactersFound([])
    }

    return (
        <div className="gameover-info flex-center">
            <div className="level flex-center-column">
                <div className="text">
                    <h2>Congrats!</h2>
                    <h3>You have finished the level in {latestCompletionTime} seconds!</h3>
                </div>
                <div className="buttons flex-center">
                    <Link onClick={() => setCharactersFound([])} to={"/"}><button>Return to main menu</button></Link>
                    <button onClick={restartGame} className="green">Restart level</button>
                </div>
            </div>
            <Highscore gameImageName={gameImageName} latestCompletionTime={latestCompletionTime} />
        </div>
    )
}