import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm
        onGuessSubmit={(guess) => {
          setGuesses((prevGuesses) => [...prevGuesses, guess]);
        }}
      />
    </>
  );
}

export default Game;
