import React, {useState} from "react";
import './Header.css';

import Timer from "../Timer/Timer";

export default function Header({setSeconds, seconds, isTimerRunning, setIsTimerRunning}) {

    return (
        <header className="flex-center space-around">
            <div className="buttons">
                <button>Start</button>
                <button>Menu</button>
            </div>
            <Timer setSeconds={setSeconds} seconds={seconds} />
        </header>
    )
}