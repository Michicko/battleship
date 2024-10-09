import Player from "./Player.js";
import Ship from "./Ship.js";

const p1Ships = [
  new Ship(3, 2, 3),
  new Ship(2, 3, 1),
  new Ship(1, 2, 5),
  new Ship(4, 5, 6),
];

const p2Ships = [
  new Ship(2, 1, 5),
  new Ship(3, 4, 2),
  new Ship(2, 6, 3),
  new Ship(1, 2, 1),
];

const p1 = new Player();
p1.positionShipsOnGameboard(p1Ships);

const p2 = new Player();

// console.log(p1, p2);

// console.log(p1);
// console.log(p1.gameboard.receiveAttack(2, 3));
// console.log(p1.gameboard.receiveAttack(1, 3));
// console.log(p1.gameboard.receiveAttack(2, 3));
// console.log(p1.gameboard.receiveAttack(2, 3));
console.log(p1.getGameboard());
// console.log(p2.gameboard.gameboard);
