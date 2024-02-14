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
    let playerSelLower = playerSelection.toLowerCase();
    let computerSelLower = computerSelection.toLowerCase();

    if (playerSelLower === computerSelLower) {
        return "Tie!";
    }
    if (beats(playerSelLower, computerSelLower)) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } 
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function beats(selection1, selection2) {
    let beat = (selection1 == "rock" && selection2 == "scissors");
    beat |= (selection1 == "paper" && selection2 == "rock");
    beat |= (selection1 == "scissors" && selection2 == "paper");

    return beat;
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