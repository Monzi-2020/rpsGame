"use strict"

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    const choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
    }

const scoreComputer = [];
const scorePlayer = [];

function playGame() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock? Paper? Scissors?");
        playRound(computerSelection, playerSelection);
        console.log(`      <Score Board>
    Computer: ${scoreComputer} You: ${scorePlayer}`); 
    } 
    endGame(scoreComputer, scorePlayer);
}

function endGame(computer,player) {
    sumUp(computer);
    sumUp(player);    
    let winner;

    if (computer > player) {
        winner = "Computer";
    }
    else if (computer < player) {
        winner = "You";
    }
    else {
        winner = "both";
    }
    console.log(`The winner is ${winner}! Congratulations!`);
    }


function sumUp(score) {
    let sum = 0;
    for (let i =0; i < score.length; i++) {
        sum += score[i];
    }
}
   
    
function playRound(computerSelection, playerSelection) {
        if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") {
            console.log("You lose! Rock beats scissors");
            scoreComputer.push("1");
            scorePlayer.push("0");
            
        }
        else if (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") {
            console.log("You lose! Paper beats rock");          
            scoreComputer.push("1");
            scorePlayer.push("0");
            
        }
        else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") {
            console.log("You lose! scissors beats paper");          
            scoreComputer.push("1");
            scorePlayer.push("0");
            
        }    
        else if (playerSelection === "rock" && computerSelection.toLowerCase() === "scissors") {
            console.log("You win! Rock beats scissors");       
            scoreComputer.push("0");
            scorePlayer.push("1");
            
        }
        else if (playerSelection === "paper" && computerSelection.toLowerCase() === "rock") {
            console.log("You win! Paper beats rock");         
            scoreComputer.push("0");
            scorePlayer.push("1");
             
        }
        else if (playerSelection === "scissors" && computerSelection.toLowerCase() === "paper") {
            console.log("You win! scissors beats paper");    
            scoreComputer.push("0");
            scorePlayer.push("1");
            
        }
        else {
            console.log("Tied. Try again!")
            scoreComputer.push("0");
            scorePlayer.push("0");
        }
    
    }
    

  


