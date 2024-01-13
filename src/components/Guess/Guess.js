import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, NUM_LETTERS } from "../../constants";

const initialGuesses = range(0, NUM_OF_GUESSES_ALLOWED);

function Guess({ guesses = initialGuesses }) {
  return (
    <div className="guess-results">
      {guesses.map((result) => (
        <p className="guess" key={crypto.randomUUID()}>
          {range(0, NUM_LETTERS).map((i) => (
            <span className="cell" key={crypto.randomUUID()}>
              {" "}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Guess;
