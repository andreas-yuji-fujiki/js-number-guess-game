// imports
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

// readline config with async/await support
const rl = readline.createInterface({ input, output });

// gera número inteiro aleatório de 1 a 10
function generateNewRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

// main game function
async function divinationGame(firstGuess) {
    // game's loop condition
    let userWantToRetry = true;

    // first user guess (when game starts)
    const firstRandomNumber = generateNewRandomNumber();
    if (parseInt(firstGuess) !== firstRandomNumber) {
        console.log(`Você errou, o número secreto era ${firstRandomNumber}!`);
    } else {
        console.log(`Parabéns! Você acertou o número secreto ${firstRandomNumber}!`);
        userWantToRetry = false;
    }

    // loop to keep playing
    while (userWantToRetry) {
        const userResponse = await rl.question('Deseja tentar novamente? (s/n): ');

        if (userResponse.toLowerCase() === 's') {
            const newGuess = await rl.question('Digite um número de 1 a 10: ');
            const randomNumber = generateNewRandomNumber();

            if (parseInt(newGuess) !== randomNumber) {
                console.log(`Você errou, o número secreto era ${randomNumber}!`);
            } else {
                console.log(`Parabéns! Você acertou o número secreto ${randomNumber}!`);
                userWantToRetry = false;
            }
        } else if (userResponse.toLowerCase() === 'n') {
            console.log('Ok, até a próxima!');
            userWantToRetry = false;
        } else {
            console.log('Ei, dê uma resposta válida (s/n)!');
        }
    }

    rl.close();
}

// first game call
const firstGuess = await rl.question('Jogo de adivinhação! Digite um número de 1 a 10:');
await divinationGame(firstGuess);