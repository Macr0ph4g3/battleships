/* eslint-disable prefer-const */
import { Player } from "./Player";

let computer = Player(false, "computer");
let player = Player(true, "player");
console.log(player);
console.log(computer);

function gameInitialization() {
  // Placement of ships
  if (player.gameBoard.placeShip(player.shipList[0], 5, 4) == true) {
    player.gameBoard.revealShipPlacement("human", player.shipList[0], 5, 4);
  }

  if (player.gameBoard.placeShip(player.shipList[1], 5, 2)) {
    player.gameBoard.revealShipPlacement("human", player.shipList[1], 5, 2);
  }

  if (player.gameBoard.placeShip(player.shipList[2], 1, 6)) {
    player.gameBoard.revealShipPlacement("human", player.shipList[2], 1, 6);
  }
  if (player.gameBoard.placeShip(player.shipList[3], 2, 8)) {
    player.gameBoard.revealShipPlacement("human", player.shipList[3], 2, 8);
  }

  computer.gameBoard.placeShip(computer.shipList[0], 1, 1);
  computer.gameBoard.placeShip(computer.shipList[1], 1, 2);
  computer.gameBoard.placeShip(computer.shipList[2], 1, 3);
  computer.gameBoard.placeShip(computer.shipList[3], 1, 4);
  computer.gameBoard.placeShip(computer.shipList[4], 1, 5);
}
export { gameInitialization, computer, player };
