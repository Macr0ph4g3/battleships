function Gameboard() {

    return {
        coordinateList: [],
        createCoordinates() {
            for (let i = 0; i < 100; i++) {
              this.coordinateList.push(0)
            }
        },
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
            let coordList = this.coordinateList[coordMath];
            if (coordList == 0) {
                this.coordinateList[coordMath] = 'Miss'
    }   else if (coordList[0].sunk == false) {
            coordList.push('Hit')
            coordList[0].hit()
            }
        else{return false}
        },
        recordHit(location){
            
        }
    }}

module.exports = Gameboard
