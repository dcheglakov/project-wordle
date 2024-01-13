import React from "react";

import { NUM_LETTERS } from "../../constants";

function GuessForm({ onGuessSubmit }) {
  const [guess, setGuess] = React.useState("");

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    onGuessSubmit(guess);
    console.log({ guess });
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern={`[A-Za-z]{${NUM_LETTERS},${NUM_LETTERS}}`}
        maxLength={NUM_LETTERS}
        minLength={NUM_LETTERS}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessForm;
