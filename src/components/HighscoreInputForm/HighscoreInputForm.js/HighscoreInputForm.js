import { useState } from "react";

export default function HighscoreInputForm({addNewHighscoreObject, latestCompletionTime}) {
    // * HighscoreInputForm scores
    const [name, setName] = useState('');

    // * Return JSX
    return (
        <form>
            <div className="field">
                <label>Enter your name:</label>
                <input onInput={(e) => setName(e.currentTarget.value)} type="text" minLength={3} id="name" value={name}></input>
            </div>
            <button onClick={(e) => {
                e.preventDefault();
                addNewHighscoreObject({
                    name,
                    score: latestCompletionTime,
                });
                setName('');
            }} className="green">Submit</button>
        </form>
    )
}