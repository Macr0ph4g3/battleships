import { Ship } from "./ships";

function shipGeneration() {
  const shipCollection = [];

  const smallestShip = Ship(2, "Smallest Ship");
  const smallShip = Ship(3, "Small Ship");
  const smallShipTwo = Ship(3, "Small Ship");
  const mediumShip = Ship(4, "Medium Ship");
  const largeShip = Ship(5, "Large Ship");

  shipCollection.push(
    smallestShip,
    smallShip,
    smallShipTwo,
    mediumShip,
    largeShip
  );

  return shipCollection;
}

export { shipGeneration };
