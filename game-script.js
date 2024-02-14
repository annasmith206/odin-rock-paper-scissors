playGame();

/**
 * Play five rounds, report winner/loser at the end.
 */
function playGame() {
    let playerScore = 0;
    let computerScore = 0; 

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Game ${i}/5. Enter Selection: `)
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection)
        if (result == "win") {
            playerScore ++;
        } else if (result == "lose") {
            computerScore ++;
        }
    }

    if (playerScore > computerScore) {
        alert(`Congratulations! You've won! Your score: ${playerScore}. Computer score: ${computerScore}`)
    } else if (computerScore > playerScore) {
        alert(`Sorry. You lost. Your score: ${playerScore}. Computer score: ${computerScore}`)
    } else {
        alert(`It's a tie! Your score: ${playerScore}. Computer score: ${computerScore}`)
    }

}

/**
 * Plays single round of rock paper scissors, prints result message
 * @param {*} playerSelection player's choice
 * @param {*} computerSelection computer's choice
 * @returns result
 */
function playRound(playerSelection, computerSelection) {
    let playerSelLower = (playerSelection ?? "").toLowerCase();
    let computerSelLower = computerSelection.toLowerCase();

    if (playerSelLower === computerSelLower) {
        alert("You Tied!");
        return "tie";
    }
    if (beats(playerSelLower, computerSelLower)) {
        alert(`You Win! ${playerSelection} beats ${computerSelection}`);
        return "win";
    } 
    alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return "lose";
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