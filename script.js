humanScore = 0;
compScore = 0;
ties = 0;
gamePause = 0;

const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const line4 = document.querySelector(".line-4");
const line5 = document.querySelector(".line-5");

const humanScoreDisp = document.querySelector(".human-score-display");
const tiesScoreDisp = document.querySelector(".ties-score-display");
const compScoreDisp = document.querySelector(".comp-score-display");

const playAgainBtn = document.querySelector(".playagain-button");

const btnList = Array.from(document.querySelectorAll(".choice"));
btnList.forEach(btn => {
    const index = btnList.indexOf(btn);
    switch (index){
        case 0:
            btn.addEventListener("click", () => playRound("rock", getComputerChoice())); 
            break;
        case 1:
            btn.addEventListener("click", () => playRound("paper", getComputerChoice())); 
            break;
        case 2:
            btn.addEventListener("click", () => playRound("scissors", getComputerChoice())); 
            break;
        default:
            console.log("error!");
            break;
    }
});    

playAgainBtn.addEventListener("click", () => playAgain());


function getComputerChoice(){
    const choice = Math.round((Math.random() * 3 + 0.5));
    switch (choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "error!";
    }
}

function playRound(humanChoice, compChoice){

    console.log("called");

    if (gamePause == 1){
        return;
    }

    line1.textContent = ("You choose " + humanChoice);
    line2.textContent = ("Computer choose " + compChoice);
    if (humanChoice == compChoice){
        line3.textContent = ("It's a tie!");
        ties++;
    }
    else if ( (humanChoice == "rock" && compChoice == "scissors") || 
            (humanChoice == "paper" && compChoice == "rock") || 
            (humanChoice == "scissors" && compChoice == "paper") ){
        line3.textContent = ("You win!");
        humanScore++;
    }
    else{
        line3.textContent = ("Computer wins!");
        compScore++;
    }

    updateScores();
    checkWinner();
}

function updateScores(){
    humanScoreDisp.textContent = humanScore;
    tiesScoreDisp.textContent = ties;
    compScoreDisp.textContent = compScore;
}

function checkWinner(){
    if (humanScore >= 5){
        line4.textContent = "You have won 5 times, well done!";
        playAgainBtn.setAttribute("style", "display:block");
        gamePause = 1;
    }
    else if (compScore >= 5){
        line4.textContent = "Computer has won 5 times, better luck next time!";
        playAgainBtn.setAttribute("style", "display:block");
        gamePause = 1;
    }
}

function playAgain(){
    humanScore = 0;
    compScore = 0;
    ties = 0;
    gamePause = 0;  

    updateScores();

    line1.textContent = "Shoot!";
    line2.textContent = "";
    line3.textContent = "";
    line4.textContent = "";

    playAgainBtn.setAttribute("style", "display:none");
}