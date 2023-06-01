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
        return ["Draw",1,1]
    }else if(computer.toUpperCase() === "ROCK" && player.toUpperCase() == "PAPER"){
        return ["You Won! Paper beats Rock",0,1]
    }else if(computer.toUpperCase() === "ROCK" && player.toUpperCase() == "SCISSORS"){
        return ["You Lost! Rock beats Scissor",1,0]
    }else if(computer.toUpperCase() === "PAPER" && player.toUpperCase() == "ROCK"){
        return ["You Lost! Paper beats Rock",1,0]
    }else if(computer.toUpperCase() === "PAPER" && player.toUpperCase() == "SCISSORS"){
        return ["You Won! Scissors beats Paper",0,1]
    }else if(computer.toUpperCase() === "SCISSORS" && player.toUpperCase() == "ROCK"){
        return ["You Won! Rock beats Scissors",0,1]
    }else if(computer.toUpperCase() === "SCISSORS" && player.toUpperCase() == "PAPER"){
        return ["You Lost! Scissors beats Paper",1,0]             
    }
}

const game = (computerScore,playerScore) => {
    for(let i=0;i<5;i++){
        let computerSelection = getComputerChoice()
        let playerSelection = prompt("Enter your choice: Either Rock, Paper or Scissors")
        let result= playRound(computerSelection,playerSelection)
        if(result[1] === 1 && result[2] === 1){
            computerScore++
            playerScore++
        }else if(result[1] == 1){
            computerScore++
        }else if(result[1] == 0){
            playerScore++ 
        }
        console.log(result[0] +" Player: "+playerScore+" Computer: "+computerScore)
    }
    return [computerScore,playerScore]
}


let computerScore=0
let playerScore=0
alert("Its a best of 5 game")
let finalResult = game(computerScore,playerScore)
if(finalResult[0] === finalResult[1]){
    console.log("The game is a tie")
}else if(finalResult[0] > finalResult[1]){
    console.log("Computer won the game")
}else{
    console.log("You won the game")
}