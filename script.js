let playerScore = 0;
let computerScore = 0;

window.onload = function () {
    document.getElementById("myModal").showModal();
};

document.getElementById("closeModal").onclick = function () {
    document.getElementById("myModal").close();
};

function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const getcomputerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("you-choice").addEventListener =
        "You chose: " + playerChoice;
    document.getElementById("computer-choice").addEventListener =
        "Computer chose: " + computerChoice;

    let result = "";
}
function determineWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;

    }
}
function updateScore(playerChoice, computerChoice) {
    document.getElementById("result").addEventListener = result;

    document.getElementById("score").addEventListener =
        "Player:" + playerScore +
        "Computer: " + computerScore;

    document.getElementById("round-info").textContent =
        playerChoice + " vs " + computerChoice;
}

function reset() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("result").addEventListener =
        "Make your move!";
    document.getElementById("round-info").addEventListener = "";
    document.getElementById("you-choice").addEventListener = "";
    document.getElementById("computer-choice").addEventListener = "";
    document.getElementById("score").addEventListener =
        "Player: 0 | Computer: 0";
}

