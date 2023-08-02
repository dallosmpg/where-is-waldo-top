import { useEffect, useState } from 'react';

// * Imported components
import HighscoreField from '../HighscoreField/HighscoreField';
import HighscoreInputForm from '../HighscoreInputForm/HighscoreInputForm.js/HighscoreInputForm';

// * Imported dependencies
import highscore from '../../highscore';
import queryImageHighscore from '../../backend/imageHighscore';

// TODO Setup highscore form to add new highscore and update the leaderboard with new if in top10;

export default function Highscore({latestCompletionTime, gameImageName}) {
    // * Highscore states
    const NUMBER_OF_HIGHSCORES_SHOWN = 10;
    const [highscoreElements, setHighscoreElements] = useState([]);
    const [isHighscoreAdded, setIsHighscoreAdded] = useState(false);

    useEffect(() => {
        // * On mount, query highscore data and create highscoreFields
        async function createHighscoreElements() {
          const topTenHighscores = await getHighscores(NUMBER_OF_HIGHSCORES_SHOWN);
          const highscoreElements = createHighscoreElementsFromData(topTenHighscores);
          setHighscoreElements(highscoreElements);
        }
        createHighscoreElements();
      }, []);
      
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
    
    function addNewHighscoreObject(highscoreObj) {
        if (isHighscoreAdded) return;
        highscore.push(highscoreObj);
        setIsHighscoreAdded(true);
        setHighscoreElements(createHighscoreElementsFromData(getHighscores(NUMBER_OF_HIGHSCORES_SHOWN)));
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