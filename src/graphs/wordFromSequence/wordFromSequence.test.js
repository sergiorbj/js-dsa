import { wordSequence } from "./wordFromSequence";

describe("Word From Sequence", () => {
  it("Should reconstruct word SPAIN from letter sequences", () => {
    const result = wordSequence(["A>I", "S>P", "I>N", "P>A"]);

    expect(result).toBe("SPAIN");
  });

  it("Should reconstruct single letter word from empty sequence", () => {
    const result = wordSequence(["A>B"]);

    expect(result).toBe("AB");
  });
}); 