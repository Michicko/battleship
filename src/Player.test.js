import Player from "./Player.js";
import Ship from "./Ship.js";
import Gameboard from "./Gameboard.js";

const mockPositionShips = jest.fn();

jest.mock("./Gameboard.js", () =>
  jest.fn().mockImplementation(() => ({ positionShips: mockPositionShips }))
);

beforeEach(() => {
  Gameboard.mockClear();
  mockPositionShips.mockClear();
});

describe("Player class", () => {
  it("should check if the player called the new() on Gameboard", () => {
    const player = new Player();

    expect(player).toBeTruthy();
  });

  it("should check if the player called the Gameboard class constructor", () => {
    const player = new Player();

    expect(Gameboard).toHaveBeenCalledTimes(1);
  });

  it("should check if the player called a method on the class instance", () => {
    const ships = [new Ship(3, 2, 3), new Ship(2, 3, 1)];
    const player = new Player();
    player.positionShipsOnGameboard(ships);

    expect(mockPositionShips.mock.calls[0][0]).toBe(ships);
  });
});
