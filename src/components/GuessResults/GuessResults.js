import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((result) => (
        <p className="guess" key={crypto.randomUUID()}>
          {result}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
