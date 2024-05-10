import { linearSearch } from "./linearSearch";

describe("Linear Search", () => {
  it("If number is inside the array, return true", () => {
    const result = linearSearch([1, 2, 3], 3);

    expect(result).toBeTruthy();
  });

  it("If number is NOT inside the array, return false", () => {
    const result = linearSearch([1, -1, 3, 7, 10, 14], 4);

    expect(result).toBeFalsy();
  });
});
