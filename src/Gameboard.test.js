import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";

const expectedShip = { length: 3, hits: 1, row: 2, col: 3 };
const mockReceiveAttack = jest.fn(() => expectedShip);
const mockPositionShips = jest.fn();

jest.mock("./Gameboard.js", () =>
  jest.fn().mockImplementation(() => ({
    receiveAttack: mockReceiveAttack,
    positionShips: mockPositionShips,
  }))
);

beforeEach(() => {
  Gameboard.mockClear();
  mockReceiveAttack.mockClear();
  mockPositionShips.mockClear();
});

describe("Gameboard class", () => {
  it("should check if the class constructor has been called", () => {
    const gameboard = new Gameboard();
    expect(gameboard).toBeTruthy();
  });

  it("check if the new instance called the positionShips method", () => {
    const gameboard = new Gameboard();
    const ships = [
      new Ship(3, 2, 3),
      new Ship(2, 3, 1),
      new Ship(1, 2, 5),
      new Ship(4, 5, 6),
    ];
    gameboard.positionShips(ships);
    expect(mockPositionShips.mock.calls[0][0].length).toBe(4);
    expect(mockPositionShips.mock.calls[0][0]).toBe(ships);
  });

  it("check if the new instance called the receiveAttack method", () => {
    const gameboard = new Gameboard();
    gameboard.positionShips([new Ship(3, 2, 3), new Ship(2, 3, 1)]);
    gameboard.receiveAttack(2, 3);

    expect(mockReceiveAttack.mock.calls[0].length).toBe(2);
    expect(mockReceiveAttack.mock.calls[0][0]).toBe(2);
    expect(mockReceiveAttack.mock.calls[0][1]).toBe(3);
    expect(mockReceiveAttack.mock.results[0].value).toEqual(expectedShip);
  });
});
