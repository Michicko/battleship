class Ship {
  constructor(length, row, col) {
    this.length = length;
    this.hits = 0;
    this.row = row;
    this.col = col;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits === this.length;
  }
}

export default Ship;
