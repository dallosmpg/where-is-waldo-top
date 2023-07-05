import React from "react";
import './Popupmenu.css';

export default function Popupmenu({xAxis, yAxis}) {

    const style = {
        left: xAxis,
        top: yAxis,
    }

    return (
        <div className="popup-menu" style={style}>
            <ul>
                <li>Waldo</li>
                <li>test2</li>
                <li>test3</li>
            </ul>
        </div>
    )
}