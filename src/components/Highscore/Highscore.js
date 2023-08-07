import { useEffect, useState } from 'react';

// * Imported components
import HighscoreField from '../HighscoreField/HighscoreField';
import HighscoreInputForm from '../HighscoreInputForm/HighscoreInputForm.js/HighscoreInputForm';

// * Imported dependencies
import highscore from '../../highscore';
import queryImageHighscore, { addHighscoreToImageHighscore } from '../../backend/imageHighscore';

// TODO Setup highscore form to add new highscore and update the leaderboard with new if in top10;

export default function Highscore({latestCompletionTime, gameImageName}) {
    // * Highscore states
    const NUMBER_OF_HIGHSCORES_SHOWN = 10;
    const [highscoreElements, setHighscoreElements] = useState([]);
    const [isHighscoreAdded, setIsHighscoreAdded] = useState(false);

    useEffect(() => {
        // * On mount, query highscore data, create highscoreFields and render them
        renderHighscoreElements();
      }, []);

    async function renderHighscoreElements() {
    const topTenHighscores = await getHighscores(NUMBER_OF_HIGHSCORES_SHOWN);
    const highscoreElements = createHighscoreElementsFromData(topTenHighscores);
    setHighscoreElements(highscoreElements);
    }

    async function getHighscores(numOfScores) {
    const highscore = await queryImageHighscore(gameImageName);
    return highscore
        .sort((a, b) => a.score - b.score) // Sort in descending order of scores
        .slice(0, numOfScores);
    }
    
    function createHighscoreElementsFromData(highscores) {
    return highscores.map((highscore, i) => {
        highscore.index = i;
        return <HighscoreField key={i} highscoreDataObj={highscore} />;
    });
    }
    
    async function addNewHighscoreObject(highscoreObj) {
        if (isHighscoreAdded) return;
        await addHighscoreToImageHighscore(gameImageName, highscoreObj);
        setIsHighscoreAdded(true);
        renderHighscoreElements();
    }

    // * Return JSX
    return (
        <div className='highscore flex-center-column'>
            <h1>Highscores:</h1>
            {highscoreElements}
            <HighscoreInputForm latestCompletionTime={latestCompletionTime} addNewHighscoreObject={addNewHighscoreObject} />
        </div>
    )
}