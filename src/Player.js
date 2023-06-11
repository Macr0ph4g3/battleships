
function Player(name, gameBoard) {

    return {
        name,

        gameBoard,
        randomAttack(enemyGameBoard) {
          const newArray = [];
          // This calculates every area that is possible to hit and pushes it in to above array
          for (let i = 0; i < enemyGameBoard.coordinateList.length; i++) {
          if (enemyGameBoard.coordinateList[i] == 0) {newArray.push(i)}}
          // This chooses a random location spot in that array
          const nextHitLocation = newArray[Math.floor(Math.random() * newArray.length)]
          // If array is empty, there's no spots left so it returns False
          if (newArray.length == 0) {
            return false
          }
        
          enemyGameBoard.receiveAttack(nextHitLocation, 0)

        }
        }
    }

module.exports = Player
