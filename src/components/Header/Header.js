import React from "react";
import './Header.css';

// * React Router link
import { Link } from "react-router-dom";

// * Imported components
import Timer from "../Timer/Timer";


export default function Header({setSeconds, seconds, isGameRunning, setIsGameRunning}) {

    return (
        <header className="flex-center space-around">
            <div className="buttons">
                <button disabled={!isGameRunning} className={isGameRunning ? 'red' : 'green'} onClick={() => setIsGameRunning(prevIsTimerRunning => !prevIsTimerRunning)}>{isGameRunning ? 'Stop' : 'Start'}</button>
                <Link to={''} onClick={() => setIsGameRunning(false)}><button>Menu</button></Link>
            </div>
            <Timer isTimerRunning={isGameRunning} setSeconds={setSeconds} seconds={seconds}/>
        </header>
    )
}