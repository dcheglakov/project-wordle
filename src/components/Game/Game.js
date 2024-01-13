import React from "react";

import { NUM_OF_GUESSES_ALLOWED, NUM_LETTERS } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import Guess from "../Guess";
import Banner from "../Banner";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const initialGuesses = range(0, NUM_OF_GUESSES_ALLOWED).map(() => {
  const guess = range(0, NUM_LETTERS).map(() => ({
    letter: " ",
    status: "",
  }));
  return [...guess];
});

function Game() {
  const [guesses, setGuesses] = React.useState(initialGuesses);
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);
  const lose = numOfGuesses >= NUM_OF_GUESSES_ALLOWED;
  const won = guesses.some((guess) =>
    guess.every((letter) => letter.status === "correct")
  );
  return (
    <>
      <Guess guesses={guesses} />
      {lose && (
        <Banner variant="sad">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
      {won && (
        <Banner variant="happy">
          <p>
            Congratulations, you won! The correct answer is{" "}
            <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
      <GuessForm
        onGuessSubmit={(guess) => {
          const newGuess = checkGuess(guess, answer);
          setGuesses((prevGuesses) => {
            const newGuesses = [...prevGuesses];
            const emptyGuessIndex = newGuesses.findIndex((guess) =>
              guess.every((word) => word.letter === " ")
            );
            newGuesses[emptyGuessIndex] = newGuess;
            return newGuesses;
          });
          setNumOfGuesses((prevNumOfGuesses) => prevNumOfGuesses + 1);
        }}
        disabled={lose || won}
      />
    </>
  );
}

export default Game;
