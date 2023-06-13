function Ship(length, name) {
    return {
        name,
        length,
        damage: 0,
        sunk: false,
        hit() {
            if(this.isSunk() == true ) {
               return 'Unable to attack sunken ship'
            } else {
                this.damage += 1
                this.isSunk()
            }
        },
        isSunk() {
            if(this.damage == length){
                return this.sunk = true
            }
        }
        
    }
}

export { Ship }