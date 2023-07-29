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
                console.log(`Placed ${ship.name} unsuccessfully`)
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
                console.log(`Placed ${ship.name} successfully`) 
                
                // this.revealShips(ship, x, y)
                return true
            } else { 
                console.log(`Placed ${ship.name} unsuccessfully`)

                return false }         
        },
        receiveAttack(x,y){
            const coordMath = y*10+x
            const coordList = this.coordinateList[coordMath];
            if (coordList == 0) {
                this.coordinateList[coordMath] = 'Miss'
                return 'Miss'
    }   else if (coordList[0].sunk == false && !coordList.includes('Hit')) {
            coordList.push('Hit')
            coordList[0].hit()
            this.loseCondition(this.shipList)

            return 'Hit'
            }
        else if(coordList.includes('Hit')){
            return 'Forbidden'}
        },
        loseCondition(array){
            let sunkenShips = 0
            for (let I = 0; I < array.length; I++) {
                if (array[I].sunk) {
                    sunkenShips += 1
                }
            }
             if (sunkenShips == array.length) {
                console.log(`Lost`)
                return true
             } else {
                return false
             }
            },
        revealShipPlacement(player,ship,x,y){
                // First locate the square with y coordinate below
                const row = document.querySelectorAll(`[data-y="${y}"]`);
                // Then verify it belongs to the X coordinate below
                // this won't work because it has multiple Y's selected need to verify the
                // person it's using
                // Then, for that specific square, perform the following code.
                
                    if (player=="human"){
                    for (let I = 0; I < ship.length; I++) {
                        const square = row[0].querySelector(`[data-x="${x+I}"]`)
            
                        square.style.backgroundColor = "blue"
                    }   }      
             },
        // revealShipHits(player,ship,x,y){
        //     const row = document.querySelectorAll(`[data-y="${y}"]`);
        //     let square
        //     if(player=="human"){
        //         square = row[0].querySelector(`[data-x="${x+I}"]`)
        //     } else { const square = row[1].querySelector(`[data-x="${x+I}"]`)        }



        //     }
            
        // revealShipHits
        }
    }


// module.exports = Gameboard
export { Gameboard }