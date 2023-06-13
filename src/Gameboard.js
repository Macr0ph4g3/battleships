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
        placeShip(ship, x, y) {
            for (let i = 0; i < ship.length; i++) {
                const coordMath = y*10+x
                this.coordinateList[coordMath+i] = [ship]
                this.shipList.push(ship)
            }
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

export { Gameboard }