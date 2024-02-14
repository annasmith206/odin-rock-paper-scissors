playGame();

/**
 * Play five rounds, report winner/loser at the end.
 */
function playGame() {
    // TODO
    console.log("Welcome to Rock Paper Scissors");
}

/**
 * Plays single round of rock paper scissors
 * @param {*} playerSelection player's choice
 * @param {*} computerSelection computer's choice
 * @returns result message
 */
function playRound(playerSelection, computerSelection) {
    // TODO
}

/**
 * Randomly return computer's choice 
 * @returns 'Rock', 'Paper', or 'Scissors'
 */
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}