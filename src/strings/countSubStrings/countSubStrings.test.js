import { countSubStringBruteForce, countSubStringOptimized } from "./countSubStrings"

describe("Count Substrings",() => {
    it("should return a correct number of substrings with brute force alg", () => {
        const string = "102100211"
        const result = countSubStringBruteForce(string)

        expect(result).toBe(5)
    })

    it("should return a correct number of substrings with brute optmized alg", () => {
        const string = "102100211"
        const result = countSubStringOptimized(string)

        expect(result).toBe(5)
    })
})