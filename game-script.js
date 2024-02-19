let gameStatus = document.querySelector(".game-status");
let buttonContainer = document.querySelector(".button-container");
let roundResults = document.querySelector(".round-results");
let playerScoreText = document.querySelector(".player-score");
let computerScoreText = document.querySelector(".computer-score");

const TOTAL_GAMES = 5;

let playerScore = 0;
let computerScore = 0; 
let roundNumber = 1;

buttonContainer.addEventListener("click", playRound);

/**
 playGame();

 * Play five rounds, report winner/loser at the end.
function playGame() {
    let playerScore = 0;
    let computerScore = 0; 

    for (let i = 0; i < 5; i++) {
        let result = playRound(i);

        if (result == "win") {
            playerScore ++;
        } else if (result == "lose") {
            computerScore ++;
        }
    }
    alertResults(playerScore, computerScore);
}
 */

/**
 * Play a single round of rock paper scissors. Return result of round
 * @returns "tie", "win", or "lose"
 */
function playRound(event){
    let playerSelection = event.target.textContent;
    let computerSelection = getComputerChoice();
    judgeSelections(playerSelection, computerSelection);
    roundNumber++;
    updateScoreboard();


}

function updateScoreboard() {
    playerScoreText.textContent = `Player: ${playerScore} pts`;
    computerScoreText.textContent = `Computer: ${computerScore} pts`;
    
    if (roundNumber <= 5) {
        gameStatus.textContent = `Game ${roundNumber} / ${TOTAL_GAMES}`;
    } else {
        endGame();
    }
}

function endGame() {
    if (playerScore > computerScore) {
        gameStatus.textContent = "Congrats! You won!";
    } else if (playerScore < computerScore) {
        gameStatus.textContent = "Sorry, you lost.";
    } else {
        gameStatus.textContent = "It's a tie!";
    }
    buttonContainer.removeEventListener("click", playRound);
}

/**
 * Judges selections, prints result message
 * @param {*} playerSelection player's choice
 * @param {*} computerSelection computer's choice
 * @returns "tie", "win", or "lose"
 */
function judgeSelections(playerSelection, computerSelection) {
    let playerSelLower = (playerSelection ?? "").toLowerCase();
    let computerSelLower = computerSelection.toLowerCase();

    if (playerSelLower === computerSelLower) {
        roundResults.textContent = "You Tied!";
    } else if (beats(playerSelLower, computerSelLower)) {
        roundResults.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        roundResults.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    } 
}

/**
 * Determines whether selection 1 beat selection 2
 * @param {*} selection1 
 * @param {*} selection2 
 * @returns True if selection 1 wins, False otherwise
 */
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

/**
 * Alerts final results of game
 * @param {*} playerScore Player's total
 * @param {*} computerScore Computer's total wins
 */
function alertResults(playerScore, computerScore) {
    if (playerScore > computerScore) {
        alert(`Congratulations! You've won! Your score: ${playerScore}. Computer score: ${computerScore}`)
    } else if (computerScore > playerScore) {
        alert(`Sorry. You lost. Your score: ${playerScore}. Computer score: ${computerScore}`)
    } else {
        alert(`It's a tie! Your score: ${playerScore}. Computer score: ${computerScore}`)
    }
}