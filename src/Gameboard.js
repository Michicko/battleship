class Gameboard {
  constructor() {
    const row = 10;
    const col = 10;
    this.gameboard = [];
    this.ships = [];

    // create gameboard
    for (let i = 0; i < row; i += 1) {
      const cols = [];
      for (let j = 0; j < col; j += 1) {
        cols.push(0);
      }
      this.gameboard.push(cols);
    }
  }

  // 1 - ship
  // 2 - hit ship
  // 3 - miss

  receiveAttack(row, col) {
    const attackedShip = this.ships.find(
      (ship) => ship.row === row && ship.col === col
    );
    if (attackedShip && !attackedShip.isSunk()) {
      attackedShip.hit();
      for (let i = 0; i < attackedShip.hits; i += 1) {
        this.gameboard[attackedShip.row + i][attackedShip.col] = 2;
      }
    } else {
      this.gameboard[row][col] = 3;
    }
    return attackedShip;
  }

  positionShips(ships) {
    this.ships = ships;
    ships.forEach((ship) => {
      for (let i = 0; i < ship.length; i += 1) {
        this.gameboard[ship.row + i][ship.col] = 1;
      }
    });
  }
}

export default Gameboard;
