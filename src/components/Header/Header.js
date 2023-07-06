import React from "react";
import './Header.css';

import Timer from "../Timer/Timer";

export default function Header({setSeconds, seconds, isTimerRunning, setIsTimerRunning}) {

    return (
        <header className="flex-center space-around">
            <div className="buttons">
                <button className={isTimerRunning ? 'red' : 'green'} onClick={() => setIsTimerRunning(prevIsTimerRunning => !prevIsTimerRunning)}>{isTimerRunning ? 'Stop' : 'Start'}</button>
                <button>Menu</button>
            </div>
            <Timer isTimerRunning={isTimerRunning} setSeconds={setSeconds} seconds={seconds}/>
        </header>
    )
}