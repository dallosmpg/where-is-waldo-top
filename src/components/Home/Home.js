import React from "react";
import './Home.css';

export default function Home({images, imageImport, setGameImage}) {


    return (
        <main className="flex-center">
            <div className="level-card">
                <div className="img-wrapper">
                    <img alt="Game demonstartion" src={imageImport[images.waldoSnow.imgSrc]} />
                </div>
                <div className="flex-center text-content">
                    <h3>Level 1</h3>
                    <div className="flex-center characters-showcase">

                    </div>
                </div>
            </div>
        </main>
    )
}