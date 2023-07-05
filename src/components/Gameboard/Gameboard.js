import React, {useState} from "react";
import './Gameboard.css';

import Popupmenu from "../Popup menu/Popupmenu";

export default function Gameboard({gameImage}) {
    const [xAxis, setXAxis] = useState(0);
    const [yAxis, setYAxis] = useState(0);
    const [popupIsVisible, setPopupIsVisible] = useState(false);

    function setPopupAxis(e) {
        setXAxis(e.nativeEvent.layerX);
        setYAxis(e.nativeEvent.layerY);
    }

    function setPopupVisibility() {
        setPopupIsVisible(prevVis => !prevVis);
    }

    return (
        <div className="gameboard">
            <img onClick={(e) => {
                setPopupAxis(e);
                setPopupVisibility();
            }} src={gameImage} alt='test'></img>
            {popupIsVisible ? <Popupmenu xAxis={xAxis} yAxis={yAxis} /> : ''}
        </div>
    )
}