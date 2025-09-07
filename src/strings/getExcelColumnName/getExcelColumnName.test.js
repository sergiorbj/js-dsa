import { getExcelColumnName } from "./getExcelColumnName"

describe("Get Excel Column Name",() => {
    it.skip("should return a correct excel column", () => {
        const string = 26
        const result = getExcelColumnName(string)

        expect(result).toBe("Z")
    })

    it("should return a correct excel column", () => {
        const string = 676
        const result = getExcelColumnName(string)

        expect(result).toBe("YZ")
    })
})