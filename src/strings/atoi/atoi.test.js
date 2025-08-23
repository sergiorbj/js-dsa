import { atoi } from "./atoi"

describe("Atoi",() => {
    it("should return a posivite number", () => {
        const string = "032754"
        const result = atoi(string)

        expect(result).toBe(32754)
    })

    it("should return a negative number", () => {
        const string = "-54324"
        const result = atoi(string)

        expect(result).toBe(-54324)
    })

    it("should return a maximum limit number", () => {
        const string = "3147483647"
        const result = atoi(string)

        expect(result).toBe(2147483647)
    })

    it("should return a minimum limit number", () => {
        const string = "-3147483647"
        const result = atoi(string)

        expect(result).toBe(-2147483648)
    })

    it("should return only the number", () => {
        const string = "    82163 word"
        const result = atoi(string)

        expect(result).toBe(82163)
    })
})