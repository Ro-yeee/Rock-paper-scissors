const getComputerChoice = () => {
    let choice=Math.floor(Math.random()*3)
    if(choice === 0){
        return "Rock"
    }else if(choice === 1){
        return "Paper"
    }else{
        return "Scissors"
    }
}

const playRound = (computer,player) => {
    if(computer.toUpperCase() === player.toUpperCase()){
        return "Draw"
    }else if(computer.toUpperCase() === "ROCK" && player.toUpperCase() == "PAPER"){
        return "You Won! Paper beats Rock"
    }else if(computer.toUpperCase() === "ROCK" && player.toUpperCase() == "SCISSORS"){
        return "You Lost! Rock beats Scissor"
    }else if(computer.toUpperCase() === "PAPER" && player.toUpperCase() == "ROCK"){
        return "You Lost! Paper beats Rock"
    }else if(computer.toUpperCase() === "PAPER" && player.toUpperCase() == "SCISSORS"){
        return "You Won! Scissors beats Paper"
    }else if(computer.toUpperCase() === "SCISSORS" && player.toUpperCase() == "ROCK"){
        return "You Won! Rock beats Scissors"
    }else if(computer.toUpperCase() === "SCISSORS" && player.toUpperCase() == "PAPER"){
        return "You Lost! Scissors beats Paper"             
    }
}

let computerSelection = getComputerChoice()
let playerSelection = prompt("Enter your choice: Either Rock, Paper or Scissors")

let result= playRound(computerSelection,playerSelection)
console.log(result)