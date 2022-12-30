// Available picks for computer
const choices = ['rock', 'paper', 'scissors'];

// Keep track of the score
let userScore = 0;
let compScore = 0;
game();

// play for 5 rounds and show who wins
function game() {
    for (let i = 0; i<5;i++) {
        playRound();
    }
    if (userScore > compScore) {
        // If player wins
        console.log('YOU WON THE GAME!!!!!!')
    }else if (userScore < compScore) {
        // If computer wins
        console.log('YOU LOST THE GAME :(')
    }else {
        // If it's a tie
        console.log('Game ended in a tie');
    }
    
    }

// play 1 round of game
function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    //Log the selection for player and computer
    console.log("Player picked: ", playerSelection);
    console.log("Computer picked: ", computerSelection);

    //Check who won the round
    checkWinner(playerSelection, computerSelection);

}
// Get player choice
function getPlayerChoice() {
    let p1Choice = prompt("Rock, Paper or Scissors: ").toLowerCase();
    return p1Choice;

}

// Get random computer choice 

function getComputerChoice () {

    return choices[Math.floor(Math.random() * choices.length)];

 }
// Check who won
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie');
    }
    else if 
       (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper' ) {
            console.log('Player win');
            return userScore++;

              }
    else {
        console.log('Computer win');
        return compScore++;
    }
    return console.log(('player score: ' + userScore),('Computer score: '+ compScore));
}
