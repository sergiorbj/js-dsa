import { sumUnique } from "./sumUnique";

describe("Sum Unique", () => {
  it("The sum of array numbers should be 6", () => {
    const result = sumUnique([1, 2, 3, 3]);

    expect(result).toBe(6);
  });

  it("The sum of array numbers should be 125", () => {
    const result = sumUnique([1, 3, 7, 10, 14, 10, 23, 67]);

    expect(result).toBe(125);
  });

  it("Throw error if array is empty", () => {
    expect(() => sumUnique([])).toThrow("Array is empty.");
  });

  it("Throw error if array contains strings", () => {
    expect(() => sumUnique([1, 2, "test"])).toThrow(
      "Array contains a string element."
    );
  });
});
