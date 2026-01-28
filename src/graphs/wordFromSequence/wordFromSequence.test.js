import { wordFromSequence } from "./wordFromSequence";

describe("Word From Sequence", () => {
  it("Should reconstruct word SPAIN from letter sequences", () => {
    const result = wordFromSequence(["A>I", "S>P", "I>N", "P>A"]);

    expect(result).toBe("SPAIN");
  });

  it("Should reconstruct single letter word from empty sequence", () => {
    const result = wordFromSequence(["A>B"]);

    expect(result).toBe("AB");
  });
}); 