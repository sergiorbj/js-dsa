import { minRepeatsSubstring } from "./minRepeatesSubstring";

describe("Minimum Repeats Substring", () => {
  it("Should return 3 when s1='abcd' and s2='cdabcdab'", () => {
    const result = minRepeatsSubstring("abcd", "cdabcdab");

    expect(result).toBe(3);
  });

  it("Should return 2 when s1='abc' and s2='cabca'", () => {
    const result = minRepeatsSubstring("abc", "cabca");

    expect(result).toBe(2);
  });

  it("Should return 1 when s2 is already contained in s1", () => {
    const result = minRepeatsSubstring("abcdef", "cde");

    expect(result).toBe(1);
  });

  it("Should return -1 when s2 cannot be formed by repeating s1", () => {
    const result = minRepeatsSubstring("abc", "xyz");

    expect(result).toBe(-1);
  });

  it("Should return 1 when s1 and s2 are identical", () => {
    const result = minRepeatsSubstring("hello", "hello");

    expect(result).toBe(1);
  });
}); 