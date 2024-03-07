"use strict"

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    const choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
    }

let scoreComputer = 0;
let scorePlayer = 0;

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
    content.remove();
    div1.remove();
    h1.textContent = `The winner is ${winner}!  Congratulations!`;
    const reButton = document.createElement("button");
    reButton.textContent = "Try Again?";
    result.appendChild(reButton);
    reButton.addEventListener("click", () =>
    {location.reload()});
}
 
function playRound(computerSelection, playerSelection) {
        
        if (computerSelection === "rock" && playerSelection === "scissors") {
            const text ="You lose! Rock beats scissors";
            scoreComputer += 1;  
            div.textContent = text;
        }
        else if (computerSelection === "paper" && playerSelection === "rock") {
            const text ="You lose! Paper beats rock";          
            scoreComputer += 1; 
            div.textContent = text;
         
        }
        else if (computerSelection === "scissors" && playerSelection === "paper") {
            const text ="You lose! Scissors beats paper";          
            scoreComputer += 1;
            div.textContent = text;
   
        }    
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            const text ="You win! Rock beats scissors";       
            scorePlayer += 1;
            div.textContent = text;
   
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            const text ="You win! Paper beats rock";         
            scorePlayer += 1;
            div.textContent = text;

        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            const text ="You win! Scissors beats paper";    
            scorePlayer += 1;
            div.textContent = text;          
        }
        else {
            const text ="Tied. Try again!"
            div.textContent = text;
        }
        checkScore(scoreComputer, scorePlayer);
        // scoreCom.textContent = `Computer score: ${scoreComputer}`;
        // scorePla.textContent = `Your score : ${scorePlayer}`;
        // content.appendChild(div);
        // content.appendChild(scoreCom);
        // content.appendChild(scorePla); 
}
    
function checkScore(score1, score2) {
    if(score1 === 5 || score2 === 5) {
        endGame(score1, score2); 
    }
    else {
        scoreCom.textContent = `Computer score: ${scoreComputer}`;
        scorePla.textContent = `Your score : ${scorePlayer}`;
        content.appendChild(div);
        content.appendChild(scoreCom);
        content.appendChild(scorePla);  
    }
}

const content = document.querySelector("content")
const buttons = document.querySelectorAll("button");
const div1 = document.querySelector("div")
const div = document.createElement("div");
const scoreCom = document.createElement("div");
const scorePla = document.createElement("div");
scoreCom.classList.add("font");
scorePla.classList.add("font");
div.classList.add("font");
const result = document.querySelector("result");
const h1 = document.querySelector("h1")


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        let playerSelection = ""
        playerSelection = button.id;
        playRound(computerSelection, playerSelection);
    });
});





