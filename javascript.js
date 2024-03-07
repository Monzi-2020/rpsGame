"use strict"

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    const choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
    }


getComputerChoice();
const computerSelection = getComputerChoice();
let playerSelection = ""
let scoreComputer = 0;
let scorePlayer = 0;



// endGame(scoreComputer, scorePlayer);

function endGame(scoreComputer,scorePlayer) {   
    let winner;
    if (scoreComputer > scorePlayer) {
        winner = "Computer";
    }
    else if (scoreComputer < scorePlayer) {
        winner = "You";
    }
    else {
        winner = "both";
    }
    console.log(`The winner is ${winner}! Congratulations!`);
}

    
function playRound(computerSelection, playerSelection) {
        if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") {
            const text ="You lose! Rock beats scissors";
            scoreComputer += 1;
            div.textContent = text;
            scoreCom.textContent = `Computer score: ${scoreComputer}`;
            scorePla.textContent = `Your score : ${scorePlayer}`;
    
        }
        else if (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") {
            const text ="You lose! Paper beats rock";          
            scoreComputer += 1; 
            div.textContent = text;
            scoreCom.textContent = `Computer score: ${scoreComputer}`;
            scorePla.textContent = `Your score : ${scorePlayer}`;
 
        }
        else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") {
            const text ="You lose! scissors beats paper";          
            scoreComputer += 1;
            div.textContent = text;
            scoreCom.textContent = `Computer score: ${scoreComputer}`;
            scorePla.textContent = `Your score : ${scorePlayer}`;
            
        }    
        else if (playerSelection === "rock" && computerSelection.toLowerCase() === "scissors") {
            const text ="You win! Rock beats scissors";       
            scorePlayer += 1;
            div.textContent = text;
            scoreCom.textContent = `Computer score: ${scoreComputer}`;
            scorePla.textContent = `Your score : ${scorePlayer}`;
            
        }
        else if (playerSelection === "paper" && computerSelection.toLowerCase() === "rock") {
            const text ="You win! Paper beats rock";         
            scorePlayer += 1;
            div.textContent = text;
            scoreCom.textContent = `Computer score: ${scoreComputer}`;
            scorePla.textContent = `Your score : ${scorePlayer}`;
             
        }
        else if (playerSelection === "scissors" && computerSelection.toLowerCase() === "paper") {
            const text ="You win! scissors beats paper";    
            scorePlayer += 1;
            div.textContent = text;
            scoreCom.textContent = `Computer score: ${scoreComputer}`;
            scorePla.textContent = `Your score : ${scorePlayer}`;
            
        }
        else {
            const text ="Tied. Try again!"
            div.textContent = text;
            scoreCom.textContent = `Computer score: ${scoreComputer}`;
            scorePla.textContent = `Your score : ${scorePlayer}`;
        
        }
     content.appendChild(div);
     content.appendChild(scoreCom);
     content.appendChild(scorePla);
}
    

const content = document.querySelector("content")
const buttons = document.querySelectorAll("button");
const div = document.createElement("div");
const scoreCom = document.createElement("div");
const scorePla = document.createElement("div");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        playRound(computerSelection, playerSelection);
    });
});





