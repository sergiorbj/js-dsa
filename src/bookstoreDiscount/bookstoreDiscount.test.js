import { getMinimumPrice } from "./bookstoreDiscount";

describe("getMinimumPrice", () => {
  it("should return 0 for an empty array", () => {
    expect(getMinimumPrice([])).toBe(0);
  });

  it("should return the price of a single book without discount", () => {
    expect(getMinimumPrice([1])).toBe(9.0);
  });

  it("should apply a 5% discount for 2 different books", () => {
    expect(getMinimumPrice([1, 2])).toBe(17.1);
  });

  it("should apply a 10% discount for 3 different books", () => {
    expect(getMinimumPrice([1, 2, 3])).toBe(24.3);
  });

  it("should apply a 15% discount for 4 different books", () => {
    expect(getMinimumPrice([1, 2, 3, 4])).toBe(28.8);
  });

  it("should apply a 20% discount for 5 different books", () => {
    expect(getMinimumPrice([1, 2, 3, 4, 5])).toBe(33.75);
  });

  it("should apply a 25% discount for 6 different books", () => {
    expect(getMinimumPrice([1, 2, 3, 4, 5, 6])).toBe(37.8);
  });

  it("should apply a 30% discount for 7 different books", () => {
    expect(getMinimumPrice([1, 2, 3, 4, 5, 6, 7])).toBe(40.95);
  });

  it("should handle multiple copies of the same book correctly", () => {
    expect(getMinimumPrice([1, 1, 2, 2, 3, 4])).toBe(45.9);
  });

  it("should handle complex cases with multiple groups", () => {
    expect(getMinimumPrice([1, 1, 2, 2, 3, 3, 4, 5])).toBe(58.05);
  });

  it("should handle a single book repeated multiple times", () => {
    expect(getMinimumPrice([1, 1, 1, 1])).toBe(36);
  });
});
