export default function HighcoreField({highscoreDataObj}) {

    return (
        <div className="field flex-center">
            <h4>{highscoreDataObj.name}</h4>
            <h3>{highscoreDataObj.score}</h3>
        </div>
    )
}