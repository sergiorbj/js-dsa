import { largestWordSubSequence } from "./largestWordSubSequence" 

describe("Largest Word Subsequence",() => {
    it("should return the largest world", () => {
        const dictionary = [ "ale", "apple", "monkey", "plea" ]
        const string = "abpcplea"
        const result = largestWordSubSequence(dictionary, string)

        expect(result).toBe("apple")
    })
})