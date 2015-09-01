function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if(playerMove === 'scissors'){
        switch (computerMove) {
            case 'scissors':
                winner = 'tie';
                break;
            case 'paper':
                winner = 'player';
                break;
            case 'rock':
                winner = 'computer';
                break;
        }
    } else if(playerMove === 'paper'){
        switch (computerMove) {
            case 'scissors':
                winner = 'computer';
                break;
            case 'paper':
                winner = 'tie';
                break;
            case 'rock':
                winner = player;
                break;
        }
    } else if(playerMove === 'rock'){
        switch (computerMove) {
            case 'scissors':
                winner = 'player';
                break;
            case 'paper':
                winner = 'computer';
                break;
            case 'rock':
                winner = 'tie';
                break;
        }
    }
    return winner;
}

function playToFive(){
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
        for(i=0; i<5; i++){
            var playerMove = getPlayerMove();
            var computerMove = getComputerMove();
            var tempWinner = getWinner(playerMove, computerMove);
                if(tempWinner == 'player'){
                    playerWins = playerWins +1;
                }
                else if(tempWinner == 'computer'){
                    computerWins = computerWins +1;
                }
                else{
                    i = i-1;
                }
            
        }
    return [playerWins, computerWins];
}
