const ship = require('./ships');
const Gameboard = require('./Gameboard');

test('hit increases total hits', () => {
// Creating ship object
const smallShip = ship(3);
    smallShip.hit();
    expect(smallShip.damage).toBe(1);
})
test('Multiple hits increase dmg multiple times', () => {
// Creating ship object
const smallShip = ship(3);
    smallShip.hit();
    smallShip.hit();
    expect(smallShip.damage).toBe(2);
})

test('Damage = length marks the ship as Sunk', () => {
// Creating ship object
const smallShip = ship(3);
smallShip.hit();
smallShip.hit();
smallShip.hit();
expect(smallShip.isSunk()).toBe(true);
})
test('unable to hit ship more than total length', ()=>{
// Creating ship object
const smallShip = ship(3);
smallShip.hit();
smallShip.hit();
smallShip.hit();
smallShip.hit();

expect(smallShip.hit()).toBe('Unable to attack sunken ship');

})

// gameboard tests

test('GameBoard has an array of coordinates', () => {
const playerGameBoard = Gameboard();
playerGameBoard.createCoordinates();
expect(playerGameBoard.coordinateList.length).toBe(100);
})

test('GameBoard placing ship at 0,0', () => {
const playerGameBoard = Gameboard();
playerGameBoard.createCoordinates();
const smallShip = ship(3);

playerGameBoard.placeShip(smallShip, 0, 0);

expect(playerGameBoard.coordinateList[0]).toStrictEqual([smallShip]);
})

test('Gameboard placing ship at 9,0', ()=>{
    const playerGameBoard = Gameboard();
    playerGameBoard.createCoordinates();
    const smallShip = ship(3);
    
    playerGameBoard.placeShip(smallShip, 9, 0);
expect(playerGameBoard.coordinateList[9]).toStrictEqual([smallShip]);
})
test('Gameboard placing ship at 0,1', ()=>{
    const playerGameBoard = Gameboard();
    playerGameBoard.createCoordinates();
    const smallShip = ship(3)
    
    playerGameBoard.placeShip(smallShip, 0,1)
expect(playerGameBoard.coordinateList[10]).toStrictEqual([smallShip])
})
test('Gameboard placing ship at 5,5', ()=>{
    const playerGameBoard = Gameboard();
    playerGameBoard.createCoordinates();
    const smallShip = ship(3);
    
    playerGameBoard.placeShip(smallShip, 5,5);
expect(playerGameBoard.coordinateList[55]).toStrictEqual([smallShip]);
})

test('Gameboard places ship until length is 0', ()=> {
    const playerGameBoard = Gameboard();
    playerGameBoard.createCoordinates();
    const smallShip = ship(3);
    
    playerGameBoard.placeShip(smallShip, 9, 0);
    expect(playerGameBoard.coordinateList[9]).toStrictEqual([smallShip]);
    expect(playerGameBoard.coordinateList[10]).toStrictEqual([smallShip]); 
    expect(playerGameBoard.coordinateList[11]).toStrictEqual([smallShip]); 
  
} )

test('Gameboard places ship until length is 0 pt. 2', ()=> {
    const playerGameBoard = Gameboard();
    playerGameBoard.createCoordinates();
    const smallShip = ship(3);
    
    playerGameBoard.placeShip(smallShip, 9, 2);
    expect(playerGameBoard.coordinateList[29]).toStrictEqual([smallShip]);
    expect(playerGameBoard.coordinateList[30]).toStrictEqual([smallShip]); 
    expect(playerGameBoard.coordinateList[31]).toStrictEqual([smallShip]); 
} )

test('receive an attack at empty coordinates records missed shot', () => {
    const playerGameBoard = Gameboard();
    playerGameBoard.createCoordinates();
    const smallShip = ship(3);
    playerGameBoard.placeShip(smallShip, 0, 0);
    playerGameBoard.receiveAttack(0,1);
    expect(playerGameBoard.coordinateList[10]).toBe('Miss')
})
test('receive an attack at coordinates with ship records hit', () => {
    const playerGameBoard = Gameboard();
    playerGameBoard.createCoordinates();
    const smallShip = ship(3);
    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.receiveAttack(0,1);
    expect(smallShip.damage).toBe(1)
    expect(playerGameBoard.coordinateList[10][1]).toBe('Hit')
})
test('receive an attack at coordinates and sink ship', () => {
    const playerGameBoard = Gameboard();
    playerGameBoard.createCoordinates();
    const smallShip = ship(1);
    playerGameBoard.placeShip(smallShip, 0, 1);
    playerGameBoard.receiveAttack(0,1);
    expect(smallShip.damage).toBe(1)
    expect(smallShip.sunk).toBe(true)
    expect(playerGameBoard.coordinateList[10][1]).toBe('Hit')
})
