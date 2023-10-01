let turn = ''

function gameLogic(computer, player){

    // Checks that each player has five ships in ship list so that game starts properly
    // If thats true then set the turn to be for the Player to start
    // Each turn check lose condition for both players
    // if either one is true then end game and stop clicking
    if((computer.gameBoard.shipList.length = 5) && (player.gameBoard.shipList.length = 5) ) {
        turn = 'Player'
    }
    if(turn = 'Player'){
        turn = 'Computer'
    }
    if(turn = 'Computer'){
        setTimeout(()=>{computer.randomAttack(player.gameBoard)
            turn = 'Player'
            console.log('PC attacked')
    
        }, 500);
    }

}

export { gameLogic, turn}