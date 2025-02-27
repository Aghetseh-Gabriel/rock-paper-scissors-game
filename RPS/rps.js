const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore"); 

// lets create 3 variable
let pScore = 0; // where pScore stands for player's score which is Boy G
let cScore = 0;  // same logic here for computer
let player; 
let computer; 
let result;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();

    playerText.textContent = `Boy G: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

    playerScore.textContent = `score: ${pScore}`;
    computerScore.textContent = `score: ${cScore}`;
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    
    switch(randNum){
        case 1: 
         computer = "ROCK";
        break;
        case 2: 
         computer = "PAPER";
        break;
        case 3: 
         computer = "SCISSORS";
        break;
    }
 
}

function checkWinner() {
    if(player == computer){
        return "Draw"
    }
     if(computer == "ROCK" && player == "PAPER") {
        pScore++;
        return ( "You win!🏆" );
    }
     if(computer == "PAPER" && player == "SCISSORS") {
        pScore++;
        return ( "You win!🏆" );
    }
     if(computer == "SCISSORS" && player == "ROCK") {
        pScore++;
        return ( "You win!🏆" ) 
    } else {
        cScore++
        return ( "You Lose😔");
    }
 } 