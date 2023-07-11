import React from "react";
import './Header.css';

import Timer from "../Timer/Timer";

import { Link } from "react-router-dom";

export default function Header({setSeconds, seconds, isTimerRunning, setIsTimerRunning}) {

    return (
        <header className="flex-center space-around">
            <div className="buttons">
                <button className={isTimerRunning ? 'red' : 'green'} onClick={() => setIsTimerRunning(prevIsTimerRunning => !prevIsTimerRunning)}>{isTimerRunning ? 'Stop' : 'Start'}</button>
                <Link to={''}><button>Menu</button></Link>
            </div>
            <Timer isTimerRunning={isTimerRunning} setSeconds={setSeconds} seconds={seconds}/>
        </header>
    )
}