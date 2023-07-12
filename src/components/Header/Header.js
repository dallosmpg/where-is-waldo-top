import React from "react";
import './Header.css';

import Timer from "../Timer/Timer";

import { Link } from "react-router-dom";

export default function Header({setSeconds, seconds, isGameRunning, setIsGameRunning}) {

    return (
        <header className="flex-center space-around">
            <div className="buttons">
                <button className={isGameRunning ? 'red' : 'green'} onClick={() => setIsGameRunning(prevIsTimerRunning => !prevIsTimerRunning)}>{isGameRunning ? 'Stop' : 'Start'}</button>
                <Link to={''} onClick={() => setIsGameRunning(false)}><button>Menu</button></Link>
            </div>
            <Timer isTimerRunning={isGameRunning} setSeconds={setSeconds} seconds={seconds}/>
        </header>
    )
}