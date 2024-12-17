function getComputerChoice(){
    let computerHand = Math.floor(Math.random() * 3);
    if(computerHand === 0){
        return 'rock'
    }else if(computerHand === 1){
        return 'paper'
    }else if(computerHand === 2){
        return 'scissor'
    }
};

function getHumanChoice(){
    let humanHand = prompt('Choose: rock, paper or scissor');
        if(humanHand.toLowerCase() == 'rock'){
            return 'rock'
        }else if(humanHand.toLowerCase() == 'paper'){
            return 'paper'
        }else if(humanHand.toLowerCase() == 'scissor'){
            return 'scissor'
}
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

        function playRound(humanChoice, computerChoice){
            if((humanChoice == 'rock' && computerChoice == 'scissor') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissor' && computerChoice == 'paper')){
                humanScore++;
                console.log('You win!');
            }else if((computerChoice == 'rock' && humanChoice == 'scissor') || (computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissor' && humanChoice == 'paper')){
                computerScore++;
                console.log('Computer wins!');
            }else if(humanChoice == computerChoice){
                console.log('It\'s a tie');
            }
        }

        for(i = 0; i < 5; i++){
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice)
        }if(humanScore > computerScore){
            console.log('You\'re the champion my friend')
        }else if(computerScore > humanScore){
            console.log('You have lost buddy')
        }
    }
    
    playGame();