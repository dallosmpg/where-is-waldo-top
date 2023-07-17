import HighcoreField from '../HighscoreField/HighscoreField';
import highscore from '../../highscore';

export default function Highscore({}) {
    const bestTenHighscore = highscore.slice(0, 11);
    const highscoreElements = bestTenHighscore.map(highscore => {
        return <HighcoreField highscoreDataObj={highscore} />
    })

    return (
        <div className='highscore flex-center-column'>
            <h1>Highscores:</h1>
            {highscoreElements}
        </div>
    )
}