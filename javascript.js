"use strict"

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    const choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("You lose! Rock beats scissors");
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("You lose! Paper beats rock");   
    }
    else if (computerSelection === "scissors" && playerSelection=== "paper") {
        console.log("You lose! scissors beats papaer");    
    }    
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats scissors");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock");  
    }
    else if (playerSelection === "scissors" && computerSelection=== "paper") {
        console.log("You win! scissors beats paper");
    }
    else {
        console.log("Tied. Try again!")
    }
}