/* eslint-disable prefer-const */

import { Ship } from "./ships";
import { Gameboard } from "./Gameboard"
import { Player } from "./Player"

let computer = Player('computer')
let player = Player('player')
let turn = ""
console.log(player)
function gameInitialization(){

    // Placement of ships
    
    
    if(player.gameBoard.placeShip(player.shipList[0],5,4) == true){
        player.gameBoard.revealShipPlacement("human",player.shipList[0],5,4)
     }
    
    if(player.gameBoard.placeShip(player.shipList[1],5,2)){
        player.gameBoard.revealShipPlacement("human",player.shipList[1],5,2)
    
    }
    
    if(player.gameBoard.placeShip(player.shipList[2],1,6)){
        player.gameBoard.revealShipPlacement("human",player.shipList[2],1,6)
    
    }
    if(player.gameBoard.placeShip(player.shipList[3],2,8)){
        player.gameBoard.revealShipPlacement("human",player.shipList[3],2,8)
    
    }
    
    computer.gameBoard.placeShip(computer.shipList[0],1,1)
    computer.gameBoard.placeShip(computer.shipList[1],1,2)
    computer.gameBoard.placeShip(computer.shipList[2],1,3)
    computer.gameBoard.placeShip(computer.shipList[3],1,4)
    computer.gameBoard.placeShip(computer.shipList[4],1,5)
    
}
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
export {gameInitialization, gameLogic, computer, player, turn}
