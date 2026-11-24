function getComputerChoice() {

    const computerChoice = Math.random();

    if (computerChoice < 1/3) {
        return "rock";
    } else if (computerChoice < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {

    const humanChoice = prompt("Pick:", "rock").toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
        } else {
        return "Invalid choice"
    }
}



//const humanSelection = getHumanChoice(); /* has the value that getHumanChoice produces */
//const computerSelection = getComputerChoice(); /*has the value that getComputerChoice produces */




function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

    console.log("Computer chose:", computerChoice);
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! rock beats scissors!");
        return ++humanScore;

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! paper beats rock!");
        return ++humanScore;

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! scissors beat paper!");
        return ++humanScore;

    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! paper beats rock!");
        return ++computerScore;

    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! rock beats scissors!");
        return ++computerScore;

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! scissors beat paper!");
        return ++computerScore;

    } else if (humanChoice === computerChoice) {
        console.log("Tie game!");
    } else {
        console.log("Invalid choice.")
    }
}
    playRound(getHumanChoice(), getComputerChoice());
    

    playRound(getHumanChoice(), getComputerChoice());

    playRound(getHumanChoice(), getComputerChoice());
   
    playRound(getHumanChoice(), getComputerChoice());
    
    playRound(getHumanChoice(), getComputerChoice());


    console.log("Your score:", humanScore);
    console.log("Computer score:", computerScore);

    
    if (humanScore > computerScore) {
        console.log("YOU WON!!");
    } else if (computerScore > humanScore) {
        console.log("You lost, hard luck");
    } else {
        console.log("Tie game. Actually you know what ? you both lose.")
    }
    
}

playGame();




