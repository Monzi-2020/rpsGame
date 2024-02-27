"use strict"

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    const choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
    }

const computerSelection = getComputerChoice();
let scoreComputer = [];
let scorePlayer = [];

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock? Paper? Scissors?");
        getComputerChoice();
        playRound(computerSelection, playerSelection);
        console.log(`Computer: ${scoreComputer} You: ${scorePlayer}`); 
    } 
   }

// function endGame() {
    // console.log()
// }

function playRound(computerSelection, playerSelection) {
        if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") {
            console.log("You lose! Rock beats scissors");
            scoreComputer = 1;
            scorePlayer = 0;
            return [ scoreComputer, scorePlayer];
        }
        else if (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") {
            console.log("You lose! Paper beats rock"); 
            scoreComputer = 1;
            scorePlayer = 0;
            return [ scoreComputer, scorePlayer]; 
            
        }
        else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") {
            console.log("You lose! scissors beats paper"); 
            scoreComputer = 1;
            scorePlayer = 0;
            return [ scoreComputer, scorePlayer];  
        }    
        else if (playerSelection === "rock" && computerSelection.toLowerCase() === "scissors") {
            console.log("You win! Rock beats scissors");
            scoreComputer = 0;
            scorePlayer = 1;
            return [ scoreComputer, scorePlayer]; 
            
        }
        else if (playerSelection === "paper" && computerSelection.toLowerCase() === "rock") {
            console.log("You win! Paper beats rock");
            scoreComputer = 0;
            scorePlayer = 1;
            return [ scoreComputer, scorePlayer];
             
        }
        else if (playerSelection === "scissors" && computerSelection.toLowerCase() === "paper") {
            console.log("You win! scissors beats paper");
            scoreComputer = 0;
            scorePlayer = 1;
            return [ scoreComputer, scorePlayer];
            
        }
        else {
            console.log("Tied. Try again!")
            scoreComputer = 0;
            scorePlayer = 0;
            return [ scoreComputer, scorePlayer];
        }
    }
    

  


