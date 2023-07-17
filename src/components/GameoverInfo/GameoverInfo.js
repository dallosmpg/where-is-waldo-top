import React from "react";
import './GameoverInfo.css';

import Highscore from "../Highscore/Highscore";

export default function GameoverInfo({}) {


    return (
        <div className="gameover-info flex-center">
            <div className="level flex-center-column">
                <div className="text">
                    <h2>Congrats!</h2>
                    <h3>You have finished the level in 23 seconds!</h3>
                </div>
                <div className="buttons flex-center">
                    <button>Return to main menu</button>
                    <button className="green">Restart level</button>
                </div>
            </div>
            <Highscore />
        </div>
    )
}