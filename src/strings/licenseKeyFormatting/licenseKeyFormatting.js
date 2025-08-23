function licenseKeyFormatting(s,k) {
    // Create constants
    let count = 0
    let result = ""

    // String cleanup
    const cleanedString = s.replaceAll("-", "").toUpperCase()

    if(cleanedString === ""){
        return result
    }

    // Iterate and starting from end
    for(let i = cleanedString.length -1; i >= 0; i--){
        count++

        result = cleanedString[i] + result

        // Check if count reached the maximum number to group and add dashes only if is not the first group
        if(count === k && i > 0) {
            result = "-" + result

            // Reset the group counter
            count = 0
        }
    }

    return result
}

export { licenseKeyFormatting }