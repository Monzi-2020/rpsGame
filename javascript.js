"use strict"

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    const choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();

function playRound(computerSelection, playerSelection) {

}