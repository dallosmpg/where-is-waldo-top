import HighcoreField from '../HighscoreField/HighscoreField';
import HighscoreInputForm from '../HighscoreInputForm/HighscoreInputForm.js/HighscoreInputForm';
import highscore from '../../highscore';
import { useState } from 'react';

// TODO Setup highscore form to add new highscore and update the leaderboard with new if in top10;

export default function Highscore({latestCompletionTime}) {
    const NUMBER_OF_HIGHSCORES_SHOWN = 10;
    const  [highscoreElements, setHighscoreElements] = useState(createHighscoreElements(getTopTenHighscore()));
    const [isHighscoreAdded, setIsHighscoreAdded] = useState(false)

    function getTopTenHighscore() {
        return highscore
        .sort((a, b) => a.score > b.score)
        .slice(0, NUMBER_OF_HIGHSCORES_SHOWN + 1)
    }

    function createHighscoreElements(highscores) {
        return highscores.map((highscore, i) => {
            highscore.index = i;
            return <HighcoreField highscoreDataObj={highscore} />
        })   
    }

    function addNewHighscoreObject(highscoreObj) {
        if (isHighscoreAdded) return;
        highscore.push(highscoreObj);
        setIsHighscoreAdded(true);
        setHighscoreElements(createHighscoreElements(getTopTenHighscore()));
    }

    return (
        <div className='highscore flex-center-column'>
            <h1>Highscores:</h1>
            {highscoreElements}
            <HighscoreInputForm latestCompletionTime={latestCompletionTime} addNewHighscoreObject={addNewHighscoreObject} />
        </div>
    )
}