import Ship from "./Ship.js";

jest.mock("./Ship.js");

beforeEach(() => {
  Ship.mockClear();
});

describe("Ship clsass", () => {
  it("should check if the new() has been called on Ship", () => {
    const ship = new Ship(3, 2, 4);

    expect(Ship).toHaveBeenCalledTimes(1);
  });

  it("should check if the hit and isSunk methods have been called", () => {
    expect(Ship).not.toHaveBeenCalled();
    const ship = new Ship(3, 2, 4);
    expect(Ship).toHaveBeenCalled();
    const mockShipInstance = Ship.mock.instances[0];
    const mockHit = mockShipInstance.hit;
    const mockIsSunk = mockShipInstance.isSunk;
    ship.hit();
    ship.hit();
    ship.hit();
    ship.isSunk();

    expect(mockHit).toHaveBeenCalledTimes(3);
    expect(mockIsSunk).toHaveBeenCalledTimes(1);
  });
});
