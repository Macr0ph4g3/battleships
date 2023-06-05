function Gameboard() {

    return {
        coordinateList: [],
        createCoordinates() {
            for (let i = 0; i < 100; i++) {
              this.coordinateList.push(0)
            }
        },
        placeShip(ship, x, y) {
            for (let i = 0; i < ship.length; i++) {
                let coordmath = y*10+x
                this.coordinateList[coordmath+i] = ship
            }
            }}
// It will have the ability to reserve a set of coordinates for a ship
// it needs to ensure that coordinates for ships don't overlap.
// Gameboard should be 10 x 10
// maybe divide it into object rows? so for example..
    
}

module.exports = Gameboard
