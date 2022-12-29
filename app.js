const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let compScore = 0;
game();

// play for 5 rounds and show who wins
function game() {
    for (let i = 0; i<5;i++) {
        playRound();
    }
    if (userScore > compScore) {
        console.log('YOU WON THE GAME!!!!!!')
    }else if (userScore < compScore) {
        console.log('YOU LOST THE GAME :(')
    }else {
        console.log('Game ended in a tie');
    }
    
    }

// play 1 round of game
function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log("Player picked: ", playerSelection);
    console.log("Computer picked: ", computerSelection);
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
