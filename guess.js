let rangeInput, attemptsInput, restartGame, randomNumber, guessInput, playAgain;
const numberNaNText = `Please enter a number greater than zero.`;
const enterNumText = `Enter a number between 1 and`;
const guessesLeft = `Number of guesses left:`;

const rangeInputPrompt = `Please enter a maximum range to guess from.`;
const attemptsInputPrompt = `Please enter a number of guesses allowed.`;

restartGame = true;
wrongAnswer = true;

// Function that takes a variableInput and its respective text for a prompt and check if the input is NaN or negative
let nanOrNegativeChecker = function (number, promptText) {
    while (!number || number < 1) {
        alert(`${numberNaNText}`)
        return number = parseInt(prompt(promptText));
    }
}


alert(`Welcome to Guess That Number! Click "OK" to begin.`);

// Game will be able to restart aslong as restartGame hs a value of true.
while (restartGame) {
    // Prompts user to set upper bound on the number possibilites
    // If parseInt not possible will return NaN
    rangeInput = parseInt(prompt(`Please enter a maximum range to guess from.`));

    // if range number given is NaN, prompts user for number greater than zero
    nanOrNegativeChecker(rangeInput, rangeInputPrompt);

    // Allows users to set number of guesses allowed
    attemptsInput = parseInt(prompt(`Please enter a number of guesses allowed.`));

    nanOrNegativeChecker(attemptsInput, attemptsInputPrompt);

    //Generates Random Number
    randomNumber = Math.floor(Math.random() * rangeInput) + 1;

    // Prompts user to guess the number
    guessInput = prompt(`${enterNumText} ${rangeInput}
    ${guessesLeft} ${attemptsInput}`);


    while (wrongAnswer) {
        if (guessInput > rangeInput) {
            alert(`Wooooah! Slow it down Buckaroo, Keep your guess under ${rangeInput}.`);
            guessInput = prompt(`Too High! Guess Lower! ${enterNumText} ${rangeInput}
            ${guessesLeft} ${attemptsInput}`);
            //Checks if guess was lower than the correct number
        } else if (guessInput < randomNumber) {
            //Subtracts 1 from attempts left
            attemptsInput--;
            guessInput = prompt(`Too low! Guess Higher! ${enterNumText} ${rangeInput}
            ${guessesLeft} ${attemptsInput}`);
            // Checks if there are any attempts left
            if (attemptsInput === 1) {
                wrongAnswer = false;
                restartGame = false;
                alert('You\'ve ran out of guesses! Better luck next time!');
            }
        // Checks if guess was higher than correct number
        } else if (guessInput > randomNumber) {
            attemptsInput--;
            guessInput = prompt(`Too High! Guess Lower! ${enterNumText} ${rangeInput}
            ${guessesLeft} ${attemptsInput}`);
            if (attemptsInput === 1) {
                wrongAnswer = false;
                alert('You\'ve ran out of guesses! Better luck next time!');
            }
        // Checks if guess was the correct number
        } else if (guessInput == randomNumber) {
            alert(`You've Guessed That Number! Congratulations!`);
            wrongAnswer = false;
        // Secret input easter egg
        } else if (guessInput === 'please help') {
            alert(`*pssst* I heard you could use some help, the correct guess is ${randomNumber}.`);
            guessInput = prompt(`${enterNumText} ${rangeInput}
            ${guessesLeft} ${attemptsInput}`);
        // If input is anything but a number or "please help", prompts user to enter a number
        } else {
            alert(numberNaNText)
            guessInput = prompt(`${enterNumText} ${rangeInput}
            ${guessesLeft} ${attemptsInput}`);
        }
    }

    playAgain = prompt(`Would you like to play again?
    Enter Yes or No.`).toLowerCase();


    if (playAgain == 'y' || playAgain == 'yes') {
        restartGame = true;
    } else if (playAgain == 'n' || 'no') {
        restartGame = false;
        alert('Okay, Goodbye!');
    }
}