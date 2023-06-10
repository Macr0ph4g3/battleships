
function Player(name, gameBoard) {

    return {
        name,
        isComputer() {
            if(name == undefined) {
                return true
            } else {
                return false
            }
        },
        gameBoard,
        }
    }

module.exports = Player
