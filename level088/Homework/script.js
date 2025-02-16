const movePickDiv = document.getElementById("playerChoice");

const aiScoreP  = document.getElementById("aiScore")
const playerScoreP  = document.getElementById("yourScore")

const AIMoves = ["rock", "paper", "src"];

let playerScore = 0;
let AIScore = 0;

movePickDiv.addEventListener("click", (e) => {
    const playerChoice = e.target.id

    const randomNum = Math.floor(Math.random() * 3)
    const AIChoice = AIMoves[randomNum]

    if(AIChoice === "paper" && playerChoice === "rock") {
        AIScore += 1;
    } else if(AIChoice === "src" && playerChoice === "paper") {
        AIScore += 1;
    } else if(AIChoice === "rock" && playerChoice === "src") {
        AIScore += 1;
    } else if(AIChoice === playerChoice) {
        console.log("Draw")
    } else {
        playerScore += 1;
    }

    console.log(AIChoice)
    playerScoreP.textContent = playerScore
    aiScoreP.textContent = AIScore
})