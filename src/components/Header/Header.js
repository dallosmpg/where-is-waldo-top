import React, {useState} from "react";
import './Header.css';

import Timer from "../Timer/Timer";

export default function Header({setSeconds, seconds}) {
    const [timer, setTimer] = useState(true);

    return (
        <header>
            {timer ? <Timer setSeconds={setSeconds} seconds={seconds} /> : ''}
            <button onClick={() => setTimer(!timer)}>Click!</button>
        </header>
    )
}