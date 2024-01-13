import React from "react";

import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED, NUM_LETTERS } from "../../constants";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const initialGuesses = range(0, NUM_OF_GUESSES_ALLOWED).map(() => {
  const guess = range(0, NUM_LETTERS).map(() => ({
    id: crypto.randomUUID(),
    letter: " ",
    match: false,
  }));
  return [...guess];
});

function Game() {
  const [guesses, setGuesses] = React.useState(initialGuesses);
  console.log({ guesses });
  return (
    <>
      <Guess guesses={guesses} />
      <GuessForm
        onGuessSubmit={(guess) => {
          const newGuess = guess.split("").map((letter, index) => ({
            id: crypto.randomUUID(),
            letter,
            status:
              answer[index] === letter
                ? "correct"
                : answer.includes(letter)
                ? "misplaced"
                : "incorrect",
          }));
          setGuesses((prevGuesses) => {
            const newGuesses = [...prevGuesses];
            const emptyGuessIndex = newGuesses.findIndex((guess) =>
              guess.every((word) => word.letter === " ")
            );
            newGuesses[emptyGuessIndex] = newGuess;
            return newGuesses;
          });
        }}
      />
    </>
  );
}

export default Game;
