import React from "react";

const NUM_LETTERS = 5;

function GuessForm() {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ guess });
        setGuess("");
      }}
    >
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
