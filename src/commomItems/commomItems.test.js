import { isCommomItem } from "./commomItems";

describe("Common Items", () => {
  it("Should return true when arrays have at least one common item", () => {
    const result = isCommomItem(['a', 'b'], ['b', 'c']);

    expect(result).toBeTruthy();
  });

  it("Should return false when arrays have no common items", () => {
    const result = isCommomItem(['a', 'b'], ['c', 'd']);

    expect(result).toBeFalsy();
  });
});
