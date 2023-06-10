
function Player(name, gameBoard) {
    let attempts = 0;

    return {
        name,
        // isComputer() {
        //     if(name === undefined) {
        //         return true
        //     } else {
        //         return false
        //     }
        // },
        gameBoard,
        randomAttack(gameBoard) {
            let x = Math.round(Math.random() * 10);
            let y = Math.round(Math.random() * 9);
      
            if (gameBoard.receiveAttack(x, y) == false) {
              attempts += 1;
              if (attempts < 99) {
                this.randomAttack(gameBoard);
                attempts = 0
              } else {
                return false;
              }
                   }
            
        }
        }
    }

module.exports = Player
