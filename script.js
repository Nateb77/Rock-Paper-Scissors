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

    document.getElementById("you-choice").textContent =
        "You chose: " + playerChoice;
    document.getElementById("computer-choice").textContent =
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
    document.getElementById("result").textContent = result;

    document.getElementById("score").textContent =
        "Player:" + playerScore +
        "Computer: " + computerScore;

    document.getElementById("round-info").textContent =
        playerChoice + " vs " + computerChoice;
}

function reset() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("result").textContent =
        "Make your move!";
    document.getElementById("round-info").textContent = "";
    document.getElementById("you-choice").textContent = "";
    document.getElementById("computer-choice").textContent = "";
    document.getElementById("score").textContent =
        "Player: 0 | Computer: 0";
}

