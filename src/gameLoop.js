/* eslint-disable prefer-const */

import { Ship } from "./ships";
import { Gameboard } from "./Gameboard"
import { Player } from "./Player"
import {generateGrid } from './gameUI'

console.log('gameloop')


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

let computer = Player('computer',computerGameBoard )
let player = Player('player',playerGameBoard )

// Placement of ships


player.gameBoard.placeShip(pSmallestShip,1,1)
if(player.gameBoard.placeShip(pSmallShipTwo,5,4) == true){
    // player.gameBoard.revealShipPlacement("human",pSmallShipTwo,5,4)
 }


player.gameBoard.placeShip(pSmallShip,1,2)
player.gameBoard.placeShip(pMediumShip,1,4)
player.gameBoard.placeShip(pLargeShip,1,5)

// computer.gameBoard.placeShip(cSmallestShip,1,1)
// computer.gameBoard.placeShip(cSmallShip,1,2)
// computer.gameBoard.placeShip(cSmallShipTwo,1,3)
// computer.gameBoard.placeShip(cMediumShip,1,4)
// computer.gameBoard.placeShip(cLargeShip,1,5)





export {computer, player}
