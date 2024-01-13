import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import Guess from "../Guess";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState();

  return (
    <>
      <Guess guesses={guesses} />
      <GuessForm
        onGuessSubmit={(guess) => {
          setGuesses((prevGuesses) => console.log(guess));
        }}
      />
    </>
  );
}

export default Game;
