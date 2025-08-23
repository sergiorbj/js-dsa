import { licenseKeyFormatting } from "./licenseKeyFormatting"

describe("License Key Formatting", () => {
    it("should returns a well formatted string", () => {
        const k = 4
        const s = "5F3Z-2e-9-w"

        const result = licenseKeyFormatting(s,k)

        expect(result).toBe("5F3Z-2E9W")
    })

    it("should returns an empty string if there are only dashes", () => {
        const k = 4
        const s = "--------"

        const result = licenseKeyFormatting(s,k)

        expect(result).toBe("")
    })

    it("should returns a well formatted string with first group smaller than the others", () => {
        const k = 3
        const s = "5F3Z-2e-9-w"

        const result = licenseKeyFormatting(s,k)

        expect(result).toBe("5F-3Z2-E9W")
    })
})