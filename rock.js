const getComputerChoice = () => {  // function for getting a choice from the computer (generated randomly)
    let choice=Math.floor(Math.random()*3)
    if(choice === 0){
        return "ROCK"
    }else if(choice === 1){
        return "PAPER"
    }else{
        return "SCISSORS"
    }
}

const playRound = (computer,player) => {   // function for playing a single round of rock paper scissors
    let compscore=0
    let playerscore=0
    if(computer === player){
        return ["Draw",compscore,playerscore]
    }else if(computer === "ROCK" && player == "PAPER"){
        return ["You Won! Paper beats Rock",compscore,++playerscore]
    }else if(computer === "ROCK" && player == "SCISSORS"){
        return ["You Lost! Rock beats Scissor",++compscore,playerscore]
    }else if(computer === "PAPER" && player == "ROCK"){
        return ["You Lost! Paper beats Rock",++compscore,playerscore]
    }else if(computer === "PAPER" && player == "SCISSORS"){
        return ["You Won! Scissors beats Paper",compscore,++playerscore]
    }else if(computer === "SCISSORS" && player == "ROCK"){
        return ["You Won! Rock beats Scissors",compscore,++playerscore]
    }else if(computer === "SCISSORS" && player == "PAPER"){
        return ["You Lost! Scissors beats Paper",++compscore,playerscore]            
    }
}

const game = (playerSelection) => {
    let result= playRound(getComputerChoice(),playerSelection)
        computerScore+=result[1]
        playerScore+=result[2]
            const scoreplayer = document.querySelector("#player") // selecting the player score card
            const scorecomputer = document.querySelector("#computer") // selecting the computer score card
            const scoredisplay = document.querySelector("#text-content") // selecting the score board text area
            scoreplayer.textContent=playerScore
            scorecomputer.textContent=computerScore
            scoredisplay.textContent=result[0]
    }

const playAgain = () => {
    if(computerScore > playerScore){
        window.alert("Game Over, You Lost !")
    }else{
        window.alert("Game Over, You Won !")
    }
    const playbutton = document.querySelector('.hidebutton')
    playbutton.classList.remove('hidebutton')
}   
    

let computerScore=0
let playerScore=0

const buttons = document.querySelectorAll('img')
buttons.forEach(button => {
    button.addEventListener('mouseenter', () =>{
        button.classList.add('button-hover')        //for button hovering effect
    })
    button.addEventListener('mouseleave', () =>{
        button.classList.remove('button-hover')     //for button hovering effect
    })
    button.addEventListener('click', (e) =>{
        if(computerScore >= 5 || playerScore >= 5){    // works only until the score of either player is 5
            playAgain()  
        }else{
            game(e.target.alt)
        }
    })
})


