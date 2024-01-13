import React from "react";

function Guess({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p className="guess" key={crypto.randomUUID()}>
          {guess.map(({ letter, status }) => (
            <span key={crypto.randomUUID()} className={`cell ${status}`}>
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
