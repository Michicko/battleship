import Gameboard from "./Gameboard.js";

class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  positionShipsOnGameboard(ships) {
    this.gameboard.positionShips(ships);
  }

  getGameboard() {
    return this.gameboard.gameboard;
  }
}

export default Player;
