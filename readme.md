# Divination Game

This is a simple number guessing game in JavaScript. The game generates a random number between 1 and 10, and the player must guess the number. The player is given the option to retry after each guess, and the game continues until the player guesses the number correctly or decides to quit.

## Features

- Generates a random number between 1 and 10.
- Prompts the user to guess the number.
- Provides feedback whether the guess was correct or not.
- Asks if the player wants to try again after each incorrect guess.
- The game runs in a loop until the user guesses correctly or exits.

## Technologies Used

- JavaScript (ES6)
- `readline` module for user input
- Async/await for handling asynchronous operations

## How to Play

1. Upon starting the game, you will be asked to input a number between 1 and 10.
2. The program will then tell you if your guess was correct or incorrect.
3. If incorrect, it will ask if you want to try again.
4. If correct, it will congratulate you and end the game.

## Running the Game

To play the Divination Game, follow these steps:

1. Clone the repository or create a file with the provided code.
2. Ensure you have Node.js installed.
3. Run the game with the following command:

```bash
node divination-game.js
