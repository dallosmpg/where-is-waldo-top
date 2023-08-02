export default function HighscoreField({highscoreDataObj}) {

    // * Return JSX
    return (
        <div className="field flex-center">
            <p>{highscoreDataObj.index + 1}</p>
            <h4>{highscoreDataObj.name}</h4>
            <h3>{highscoreDataObj.score}</h3>
        </div>
    )
}