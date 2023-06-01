function ship(length, owner) {
    return {
        length,
        owner,
        damage: 0,
        sunk: false,
        hit() {
            if(this.isSunk() == true ) {
               return 'Unable to attack sunken ship'
            } else {
                this.damage += 1
            }
        },
        isSunk() {
            if(this.damage == length){
                return this.sunk = true
            }
        }
        
    }
}

module.exports = ship
