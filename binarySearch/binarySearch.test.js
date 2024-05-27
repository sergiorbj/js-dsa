import { binarySearch } from "./binarySearch";

describe("Binary Search", () => {
  it("If number is inside the array, return true", () => {
    const result = binarySearch([1, 2, 3], 3);

    expect(result).toBeTruthy();
  });

  it("If number is NOT inside the array, return false", () => {
    const result = binarySearch([1, -1, 3, 7, 10, 14], 4);

    expect(result).toBeFalsy();
  });
});
