import { sumRepeated, sumOnlyUnique } from "./sumRepeated";

describe("Sum Repeated", () => {
  it("The sum of array numbers should be 6", () => {
    const result = sumRepeated([1, 2, 3, 3]);

    expect(result).toBe(6);
  });
});
