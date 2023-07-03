function Gameboard() {

    // eslint-disable-next-line prefer-const
    let coordinateArray = []

    function createCoordinates() {
        for (let i = 0; i < 100; i++) {
            coordinateArray.push(0)
        }
    }
    createCoordinates()

    return {
        coordinateList: coordinateArray,
        shipList: [],
        // I will need to update this to placeShip Horizontal and add a new functin for vertical placement later.
        placeShip(ship, x, y) {
            const coordMath = y*10+x
            let availableSpaces = 0
            
            // This ensures you cannot place a ship past the boundaries
            if((x + ship.length > 10) ) {
                console.log(`Placed ${ship} unsuccessfully`)
                return false
            } 

            // This checks available spots
            for (let i = 0; i < ship.length; i++) {
                if (this.coordinateList[coordMath+i] == 0) {
                    availableSpaces = availableSpaces+1
                }
            }

            if (availableSpaces == ship.length) {
                for (let i = 0; i < ship.length; i++) {
                    this.coordinateList[coordMath+i] = [ship]
                }
                this.shipList.push(ship)
                console.log(`Placed ${ship} successfully`)
                return true
            } else { 
                console.log(`Placed ${ship} unsuccessfully`)

                return false }         
        },
        receiveAttack(x,y){
            const coordMath = y*10+x
            const coordList = this.coordinateList[coordMath];
            if (coordList == 0) {
                this.coordinateList[coordMath] = 'Miss'
    }   else if (coordList[0].sunk == false) {
            coordList.push('Hit')
            coordList[0].hit()
            return this.loseCondition(this.shipList)
            }
        else{return false}
        },
        loseCondition(array){
            let sunkenShips = 0
            for (let I = 0; I < array.length; I++) {
                if (array[I].sunk) {
                    sunkenShips += 1
                }
            }
             if (sunkenShips == array.length) {
                return true
             } else {
                return false
             }
            }
        }
    }


// module.exports = Gameboard
export { Gameboard }