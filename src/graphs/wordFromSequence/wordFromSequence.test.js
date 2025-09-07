import { wordSequence } from "./wordFromSequence";

describe("Word From Sequence", () => {
  it("Should reconstruct word SPAIN from letter sequences", () => {
    const result = wordSequence(["A>I", "S>P", "I>N", "P>A"]);

    expect(result).toBe("SPAIN");
  });

  it("Should reconstruct word HELLO from letter sequences", () => {
    const result = wordSequence(["H>E", "E>L", "L>L", "L>O"]);

    expect(result).toBe("HELLO");
  });

  it("Should reconstruct single letter word from empty sequence", () => {
    const result = wordSequence(["A>B"]);

    expect(result).toBe("AB");
  });

  it("Should handle longer word sequences correctly", () => {
    const result = wordSequence(["P>R", "R>O", "O>G", "G>R", "R>A", "A>M"]);

    expect(result).toBe("PROGRAM");
  });
}); 