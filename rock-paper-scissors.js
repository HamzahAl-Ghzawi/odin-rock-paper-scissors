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

console.log(getComputerChoice());

function getHumanChoice() {

    const humanChoice = prompt("Pick:", "rock");

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
        } else {
        return "Invalid choice"
    }
}

getHumanChoice();



