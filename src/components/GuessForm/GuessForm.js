import React from "react";

import { NUM_LETTERS } from "../../constants";

function GuessForm({ onGuessSubmit, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    onGuessSubmit(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        pattern={`[A-Za-z]{${NUM_LETTERS},${NUM_LETTERS}}`}
        maxLength={NUM_LETTERS}
        minLength={NUM_LETTERS}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessForm;
