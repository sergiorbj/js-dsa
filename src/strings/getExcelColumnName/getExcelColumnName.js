function getExcelColumnName(n) {
    let result = ""

    while(n > 0){
        const remainder = (n -1) % 26

        console.log(remainder)

        const char = String.fromCharCode("A".charCodeAt(0) + remainder)

        result = char + result

        n = Math.floor((n - 1) / 26)
    }

    return result
}

export { getExcelColumnName }