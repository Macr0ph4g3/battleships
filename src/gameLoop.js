/* eslint-disable prefer-const */

import { Ship } from "./ships";
import { Gameboard } from "./Gameboard"
import { Player } from "./Player"

console.log('gameloop')
let computer = ""
let player = ""
let turn = ""
function gameInitialization(){
// Initialize Ship objects
    // Players Ships
    let pSmallestShip = Ship(2,'Smallest Ship')
    let pSmallShip    = Ship(3,'Small Ship')
    let pSmallShipTwo = Ship(3,'Small Ship')
    let pMediumShip   = Ship(4,'Medium Ship')
    let pLargeShip    = Ship(5,'Large Ship')
    
        // Computers Ships
    let cSmallestShip = Ship(2,'Smallest Ship')
    let cSmallShip    = Ship(3,'Small Ship')
    let cSmallShipTwo = Ship(3,'Small Ship')
    let cMediumShip   = Ship(4,'Medium Ship')
    let cLargeShip    = Ship(5,'Large Ship')
    
    
    // Initialize Game Boards
        // Player Game Board
    let playerGameBoard = Gameboard()
    
        // Computer Game Board
    let computerGameBoard = Gameboard()
    
    // Initialize Player
    
    computer = Player('computer',computerGameBoard )
    player = Player('player',playerGameBoard )
    
    // Placement of ships
    
    
    if(player.gameBoard.placeShip(pSmallShipTwo,5,4) == true){
        player.gameBoard.revealShipPlacement("human",pSmallShipTwo,5,4)
     }
    
    if(player.gameBoard.placeShip(pSmallShip,5,2)){
        player.gameBoard.revealShipPlacement("human",pSmallShip,5,2)
    
    }
    
    if(player.gameBoard.placeShip(pMediumShip,1,6)){
        player.gameBoard.revealShipPlacement("human",pMediumShip,1,6)
    
    }
    if(player.gameBoard.placeShip(pLargeShip,2,8)){
        player.gameBoard.revealShipPlacement("human",pLargeShip,2,8)
    
    }
    
    computer.gameBoard.placeShip(cSmallestShip,1,1)
    computer.gameBoard.placeShip(cSmallShip,1,2)
    computer.gameBoard.placeShip(cSmallShipTwo,1,3)
    computer.gameBoard.placeShip(cMediumShip,1,4)
    computer.gameBoard.placeShip(cLargeShip,1,5)
    
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
