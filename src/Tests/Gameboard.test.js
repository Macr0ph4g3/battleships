/* eslint-disable new-cap */
// const Gameboard = require('../Gameboard');
import { Gameboard } from '../Gameboard'
import { Ship } from '../ships'


// initializing globalVariable for playerGameBoard
let playerGameBoard;
beforeEach(() => {
    playerGameBoard = Gameboard();
    return playerGameBoard;
});


test('GameBoard has an array of coordinates', () => {
    expect(playerGameBoard.coordinateList.length).toBe(100);
})
test('Gameboard has exactly 100 coordinates', () => {
    expect(playerGameBoard.coordinateList.length).toBe(100)
})
test('GameBoard placing ship at 0,0', () => {
    const smallShip = Ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 0);
    expect(playerGameBoard.coordinateList[0]).toStrictEqual([smallShip]);
})
test('Gameboard placing ship at 5,0', ()=>{ 
    const smallShip = Ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 5, 0);
expect(playerGameBoard.coordinateList[5]).toStrictEqual([smallShip]);
})
test('Gameboard placing ship at 0,1', ()=>{  
    const smallShip = Ship(3, 'smallShip')
    playerGameBoard.placeShip(smallShip, 0,1)
expect(playerGameBoard.coordinateList[10]).toStrictEqual([smallShip])
})
test('Gameboard placing ship at 5,5', ()=>{
    const smallShip = Ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 5,5);
expect(playerGameBoard.coordinateList[55]).toStrictEqual([smallShip]);
})
test('Gameboard places ship until length is 0', ()=> {
    const smallShip = Ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 5, 0);
    expect(playerGameBoard.coordinateList[5]).toStrictEqual([smallShip]);
    expect(playerGameBoard.coordinateList[6]).toStrictEqual([smallShip]); 
    expect(playerGameBoard.coordinateList[7]).toStrictEqual([smallShip]); 
  
} )
test('Gameboard places ship until length is 0 pt. 2', ()=> {
    const smallShip = Ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 5, 2);
    expect(playerGameBoard.coordinateList[25]).toStrictEqual([smallShip]);
    expect(playerGameBoard.coordinateList[26]).toStrictEqual([smallShip]); 
    expect(playerGameBoard.coordinateList[27]).toStrictEqual([smallShip]); 
} )
test('receive an attack at empty coordinates records missed shot', () => {
    const smallShip = Ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 0);
    playerGameBoard.receiveAttack(0,1);
    expect(playerGameBoard.coordinateList[10]).toBe('Miss')
})
test('receive an attack at coordinates with ship records hit', () => {
    const smallShip = Ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.receiveAttack(0,1);
    expect(smallShip.damage).toBe(1)
    expect(playerGameBoard.coordinateList[10][1]).toBe('Hit')
})
test('receive an attack at coordinates and sink ship', () => { 
    const smallShip = Ship(1, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.receiveAttack(0,1);
    expect(smallShip.damage).toBe(1)
    expect(smallShip.sunk).toBe(true)
    expect(playerGameBoard.coordinateList[10][1]).toBe('Hit')
})
test('receive an attack at already hit coordinates returns error', () => {
    const smallShip = Ship(1, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.receiveAttack(0,1)
   const result = playerGameBoard.receiveAttack(0,1);

    expect(result).toBe(false)
})
test('gameboard accurately reports total ships (1)', ()=> {
    const smallShip = Ship(1, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 1);
    expect(playerGameBoard.shipList).toStrictEqual([smallShip])
})
test('gameboard accurately reports total ships (2)', ()=> { 
    const smallShip = Ship(1, 'smallShip');
    const medumShip = Ship(2, 'mediumShip');

    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.placeShip(medumShip, 0, 2);

    expect(playerGameBoard.shipList[0]).toStrictEqual(smallShip)
    expect(playerGameBoard.shipList[1]).toStrictEqual(medumShip)
})
test('gameBoard returns game over if there is one ship and its sunken', () => {
    const smallShip = Ship(1, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 1);
    const result = playerGameBoard.receiveAttack(0,1);

    expect(result).toBe(true)

})
test('gameBoard returns game over if all ships on gameboard are sunken', () => {
    const smallShip = Ship(1, 'smallShip');
    const mediumShip = Ship(2, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.placeShip(mediumShip, 0, 2);
    playerGameBoard.receiveAttack(0,1);
    playerGameBoard.receiveAttack(0,2);
    const result = playerGameBoard.receiveAttack(1,2);
    expect(result).toBe(true)
})
test('Ensure placement cannot go past boundaries', () => {
    const mediumShip = Ship(3,'mediumShip');
    const placementOne = playerGameBoard.placeShip(mediumShip,9, 0);
    const placementTwo = playerGameBoard.placeShip(mediumShip,8, 0);
    const placementThree = playerGameBoard.placeShip(mediumShip,7, 0);

    expect(placementOne).toBe(false);
    expect(placementTwo).toBe(false);
    expect(placementThree).toBe(true);
})
