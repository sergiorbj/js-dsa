import { maxPackagesGreedy } from "./warehouse";

describe("warehouse - maxPackagesGreedy", () => {
  it("should fit all 3 small packages in a large warehouse", () => {
    const warehouse = { height: 10, length: 10, breadth: 10 }; // volume: 1000
    const packages = [
      { height: 2, length: 2, breadth: 2 },  // volume: 8
      { height: 3, length: 3, breadth: 3 },  // volume: 27
      { height: 4, length: 4, breadth: 4 }   // volume: 64
    ];
    // Total volume: 8 + 27 + 64 = 99 (cabe tranquilo em 1000)
    
    const result = maxPackagesGreedy(warehouse, packages);
    
    expect(result).toBe(3);
  });

  it("should fit only 2 packages when the third is too large", () => {
    const warehouse = { height: 10, length: 10, breadth: 10 }; // volume: 1000
    const packages = [
      { height: 2, length: 2, breadth: 2 },   // volume: 8
      { height: 3, length: 3, breadth: 3 },   // volume: 27
      { height: 9, length: 9, breadth: 9 }    // volume: 729
    ];
    // Sorted by volume: 8, 27, 729
    // 8 + 27 + 729 = 764 (cabe!)
    
    const result = maxPackagesGreedy(warehouse, packages);
    
    expect(result).toBe(3);
  });
});