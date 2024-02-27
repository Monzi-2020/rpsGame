"use strict"

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    const choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
    }

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();
let scoreComputer;
let scorePlayer;
  
    function playRound(computerSelection, playerSelection) {
        if (computerSelection === "rock" && playerSelection === "scissors") {
            console.log("You lose! Rock beats scissors");
            return { scoreComputer: 1, scorePlayer: 0 };
        }
        else if (computerSelection === "paper" && playerSelection === "rock") {
            console.log("You lose! Paper beats rock");  
            return { scoreComputer: 1, scorePlayer: 0 };
        }
        else if (computerSelection === "scissors" && playerSelection=== "paper") {
            console.log("You lose! scissors beats paper");   
            return { scoreComputer: 1, scorePlayer: 0 }; 
        }    
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("You win! Rock beats scissors");
            return { scoreComputer: 0, scorePlayer: 1 };
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log("You win! Paper beats rock");
            return { scoreComputer: 0, scorePlayer: 1 };  
        }
        else if (playerSelection === "scissors" && computerSelection=== "paper") {
            console.log("You win! scissors beats paper");
            return { scoreComputer: 0, scorePlayer: 1 };
        }
        else {
            console.log("Tied. Try again!")
            return { scoreComputer: 0, scorePlayer: 0 };
        }
    }
   console.log(scoreComputer,scorePlayer);

