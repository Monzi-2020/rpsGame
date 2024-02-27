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
        console.log(scoreComputer,scorePlayer); 
    } 
   }
   

function playRound(computerSelection, playerSelection) {
        if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") {
            console.log("You lose! Rock beats scissors");
            return { scoreComputer: 1, scorePlayer: 0 };
        }
        else if (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") {
            console.log("You lose! Paper beats rock");  
            return { scoreComputer: 1, scorePlayer: 0 };
        }
        else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") {
            console.log("You lose! scissors beats paper");   
            return { scoreComputer: 1, scorePlayer: 0 }; 
        }    
        else if (playerSelection === "rock" && computerSelection.toLowerCase() === "scissors") {
            console.log("You win! Rock beats scissors");
            return { scoreComputer: 0, scorePlayer: 1 };
        }
        else if (playerSelection === "paper" && computerSelection.toLowerCase() === "rock") {
            console.log("You win! Paper beats rock");
            return { scoreComputer: 0, scorePlayer: 1 };  
        }
        else if (playerSelection === "scissors" && computerSelection.toLowerCase() === "paper") {
            console.log("You win! scissors beats paper");
            return { scoreComputer: 0, scorePlayer: 1 };
        }
        else {
            console.log("Tied. Try again!")
            return { scoreComputer: 0, scorePlayer: 0 };
        }
    }
    

  


