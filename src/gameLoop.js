/* eslint-disable prefer-const */

import { Ship } from "./ships";
import { Gameboard } from "./Gameboard"
import { Player } from "./Player"

// Initialize Ship objects
    // Players Ships
let pSmallestShip = Ship(2,'Smallest Ship')
let pSmallShip    = Ship(3,'Small Ship')
let pSmallShipTwo = Ship(3,'Small Ship')
let pMediumShip   = Ship(4,'Small Ship')
let pLargeShip    = Ship(5,'Small Ship')

    // Computers Ships
let cSmallestShip = Ship(2,'Smallest Ship')
let cSmallShip    = Ship(3,'Small Ship')
let cSmallShipTwo = Ship(3,'Small Ship')
let cMediumShip   = Ship(4,'Small Ship')
let cLargeShip    = Ship(5,'Small Ship')


// Initialize Game Boards
    // Player Game Board
let playerGameBoard = Gameboard()
playerGameBoard.placeShip(pSmallestShip)
playerGameBoard.placeShip(pSmallShip)
playerGameBoard.placeShip(pSmallShipTwo)
playerGameBoard.placeShip(pMediumShip)
playerGameBoard.placeShip(pLargeShip)


    // Computer Game Board
let computerGameBoard = Gameboard()

// Initialize Player

let computer = Player('',computerGameBoard )
let player = Player('Human',computerGameBoard )

export {  }