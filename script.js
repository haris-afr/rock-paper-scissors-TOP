humanScore = 0;
compScore = 0;
ties = 0;

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

function getHumanChoice(){
    const choice = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
    if (choice == "scissor"){
        return "scissors";
    }
    else if (choice != "rock" && choice != "paper" && choice != "scissors"){
        return "error!";
    }
    else{
        return choice;
    }
    
}

function playRound(humanChoice, compChoice){
    if (humanChoice == "error!"){
        console.log("Incorrect choice!");
        playRound(getHumanChoice(), compChoice);
        return;
    }
    console.log("You choose " + humanChoice);
    console.log("Computer choose " + compChoice);
    if (humanChoice == compChoice){
        console.log("It's a tie!");
        ties++;
    }
    else if ( (humanChoice == "rock" && compChoice == "scissors") || 
            (humanChoice == "paper" && compChoice == "rock") || 
            (humanChoice == "scissors" && compChoice == "paper") ){
        console.log("You win!");
        humanScore++;
    }
    else{
        console.log("Computer wins!");
        compScore++;
    }
}

for (i = 0; i < 5; i++){
    playRound(getHumanChoice(), getComputerChoice());
}

console.log("You won " + humanScore + " times.");
console.log("Computer won " + compScore + " times.");
console.log("There were " + ties + " ties."); 