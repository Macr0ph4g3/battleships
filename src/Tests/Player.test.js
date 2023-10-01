/* eslint-disable new-cap */
// const ship = require('../ships');
// const Gameboard = require('../Gameboard');
// const Player = require('../Player');
import { Gameboard } from '../Gameboard'
import { Player } from '../Player'
import { Ship } from '../ships'



let playerGameBoard;
let computerGameBoard;

beforeEach(() => {
    playerGameBoard = Gameboard();
    computerGameBoard = Gameboard();

    return playerGameBoard;
});

test('Can name player',() => { 
    const human = Player(true, 'Jeff');
    expect(human.name).toBe('Jeff');
} )
test('Can Place Ships on players GameBoard', ()=>{
    const human = Player('Jeff', playerGameBoard);
    const smallShip = Ship(1, 'smallShip');
    playerGameBoard.placeShip(smallShip, 9, 0);
expect(human.gameBoard.coordinateList[9]).toStrictEqual([smallShip]);
})
test('Computer Player can attack Human', () => {
        const human = Player('Jeff', playerGameBoard);
        const computer = Player('', computerGameBoard);
        computer.randomAttack(playerGameBoard);
        const checkMiss = human.gameBoard.coordinateList.includes('Miss')
        expect(checkMiss).toBe(true)
})
test('Computer Player will not attack in the same spot twice', ()=> {
    const computer = Player('', computerGameBoard);
    playerGameBoard.coordinateList = [0]
    computer.randomAttack(playerGameBoard);
    const sameSpotCheck = computer.randomAttack(playerGameBoard)
    expect(sameSpotCheck).toBe(false)

})
test('Computer Player can attack every spot on the map', () => {
    const human = Player('Jeff', playerGameBoard);
    const computer = Player('', computerGameBoard);
    for (let I = 0; I <= 99; I++) {
        computer.randomAttack(playerGameBoard);        
    }
    const checkMiss = human.gameBoard.coordinateList.includes(0)
    expect(checkMiss).toBe(false)

})

