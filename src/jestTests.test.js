/* eslint-disable new-cap */
const ship = require('./ships');
const Gameboard = require('./Gameboard');
const Player = require('./Player');

// initializing globalVariable for playerGameBoard
let playerGameBoard;
beforeEach(() => {
    playerGameBoard = Gameboard();
    return playerGameBoard;
});
// ship tests
test('hit increases total hits', () => {
// Creating ship object
const smallShip = ship(3, 'smallShip');
    smallShip.hit();
    expect(smallShip.damage).toBe(1);
})
test('Multiple hits increase dmg multiple times', () => {
// Creating ship object
const smallShip = ship(3, 'smallShip');
    smallShip.hit();
    smallShip.hit();
    expect(smallShip.damage).toBe(2);
})
test('Damage = length marks the ship as Sunk', () => {
// Creating ship object
const smallShip = ship(3, 'smallShip');
smallShip.hit();
smallShip.hit();
smallShip.hit();
expect(smallShip.isSunk()).toBe(true);
})
test('unable to hit ship more than total length', ()=>{
// Creating ship object
const smallShip = ship(3, 'smallShip');
smallShip.hit();
smallShip.hit();
smallShip.hit();
smallShip.hit();

expect(smallShip.hit()).toBe('Unable to attack sunken ship');

})

// gameboard tests
test('GameBoard has an array of coordinates', () => {
    expect(playerGameBoard.coordinateList.length).toBe(100);
})
test('Gameboard has exactly 100 coordinates', () => {
    expect(playerGameBoard.coordinateList.length).toBe(100)
})
test('GameBoard placing ship at 0,0', () => {
    const smallShip = ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 0);
    expect(playerGameBoard.coordinateList[0]).toStrictEqual([smallShip]);
})
test('Gameboard placing ship at 9,0', ()=>{ 
    const smallShip = ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 9, 0);
expect(playerGameBoard.coordinateList[9]).toStrictEqual([smallShip]);
})
test('Gameboard placing ship at 0,1', ()=>{  
    const smallShip = ship(3, 'smallShip')
    playerGameBoard.placeShip(smallShip, 0,1)
expect(playerGameBoard.coordinateList[10]).toStrictEqual([smallShip])
})
test('Gameboard placing ship at 5,5', ()=>{
    const smallShip = ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 5,5);
expect(playerGameBoard.coordinateList[55]).toStrictEqual([smallShip]);
})
test('Gameboard places ship until length is 0', ()=> {
    const smallShip = ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 9, 0);
    expect(playerGameBoard.coordinateList[9]).toStrictEqual([smallShip]);
    expect(playerGameBoard.coordinateList[10]).toStrictEqual([smallShip]); 
    expect(playerGameBoard.coordinateList[11]).toStrictEqual([smallShip]); 
  
} )
test('Gameboard places ship until length is 0 pt. 2', ()=> {
    const smallShip = ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 9, 2);
    expect(playerGameBoard.coordinateList[29]).toStrictEqual([smallShip]);
    expect(playerGameBoard.coordinateList[30]).toStrictEqual([smallShip]); 
    expect(playerGameBoard.coordinateList[31]).toStrictEqual([smallShip]); 
} )
test('receive an attack at empty coordinates records missed shot', () => {
    const smallShip = ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 0);
    playerGameBoard.receiveAttack(0,1);
    expect(playerGameBoard.coordinateList[10]).toBe('Miss')
})
test('receive an attack at coordinates with ship records hit', () => {
    const smallShip = ship(3, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.receiveAttack(0,1);
    expect(smallShip.damage).toBe(1)
    expect(playerGameBoard.coordinateList[10][1]).toBe('Hit')
})
test('receive an attack at coordinates and sink ship', () => { 
    const smallShip = ship(1, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.receiveAttack(0,1);
    expect(smallShip.damage).toBe(1)
    expect(smallShip.sunk).toBe(true)
    expect(playerGameBoard.coordinateList[10][1]).toBe('Hit')
})
test('receive an attack at already hit coordinates returns error', () => {
    const smallShip = ship(1, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.receiveAttack(0,1)
   const result = playerGameBoard.receiveAttack(0,1);

    expect(result).toBe(false)
})
test('gameboard accurately reports total ships (1)', ()=> {
    const smallShip = ship(1, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 1);
    expect(playerGameBoard.shipList).toStrictEqual([smallShip])
})
test('gameboard accurately reports total ships (2)', ()=> { 
    const smallShip = ship(1, 'smallShip');
    const medumShip = ship(2, 'mediumShip');

    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.placeShip(medumShip, 0, 2);

    expect(playerGameBoard.shipList[0]).toStrictEqual(smallShip)
    expect(playerGameBoard.shipList[1]).toStrictEqual(medumShip)
})
test('gameBoard returns game over if there is one ship and its sunken', () => {
    const smallShip = ship(1, 'smallShip');
    playerGameBoard.placeShip(smallShip, 0, 1);
    const result = playerGameBoard.receiveAttack(0,1);

    expect(result).toBe(true)

})
test('gameBoard returns game over if all ships on gameboard are sunken', () => {
    const smallShip = ship(1, 'smallShip');
    const mediumShip = ship(2, 'smallShip');
    playerGameBoard.placeShip(mediumShip, 0, 2);
    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.receiveAttack(0,1);
    playerGameBoard.receiveAttack(0,2);
    const result = playerGameBoard.receiveAttack(1,2);

    expect(result).toBe(true)
})

// Player Tests

test('Can name player',() => { 
    const human = Player('Jeff')
    expect(human.name).toBe('Jeff')
} )
test('Named Player is the identified as Human',() => { 
    const human = Player('Jeff')
    expect(human.isComputer()).toBe(false)
} )
test('Unnamed Player is identified as Computer', () => {
    const human = Player()
    expect(human.isComputer()).toBe(true)
})
test('Players spawn with gameBoard populated', () => {
    const human = Player('Jeff', playerGameBoard)
    expect(human.gameBoard).toBeDefined()
})



// test('receive an out-of-bounds attack', () => {
//     
//     
//     const smallShip = ship(1, 'smallShip');
//     playerGameBoard.placeShip(smallShip, 0, 1);
//     const result = playerGameBoard.receiveAttack(0,50);
//     expect(result).toBe(false);
// })
// This isn't really necessary because user will end up clicking on the board
// and so they can't technically go out of bounds unless they're working
// in the console and forcing coordinates which I would just hide the 
// function from the end user. 