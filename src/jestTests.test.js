const ship = require('./ships');


test('hit increases total hits', () => {
// Creating ship object
const smallShip = ship(3, 'Blady');
    smallShip.hit();
    expect(smallShip.damage).toBe(1);
})
test('Multiple hits increase dmg multiple times', () => {
// Creating ship object
const smallShip = ship(3, 'Blady');
    smallShip.hit();
    smallShip.hit();
    expect(smallShip.damage).toBe(2);
})

test('Damage = length marks the ship as Sunk', () => {
// Creating ship object
const smallShip = ship(3, 'Blady');
smallShip.hit();
smallShip.hit();
smallShip.hit();
expect(smallShip.isSunk()).toBe(true);
})
test('unable to hit ship more than total length', ()=>{
// Creating ship object
const smallShip = ship(3, 'Blady');
smallShip.hit();
smallShip.hit();
smallShip.hit();
smallShip.hit();

expect(smallShip.hit()).toBe('Unable to attack sunken ship')

})