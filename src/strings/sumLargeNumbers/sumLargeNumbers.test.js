import { sumLargeNumbers } from "./sumLargeNumbers"

describe("Sum Large Numbers", () => {
    it("should returns a well correct sum beetween two numbers as string", () => {
        const s1 = "50"
        const s2 = "75"

        const result = sumLargeNumbers(s1,s2)

        expect(result).toBe("125")
    })
})
