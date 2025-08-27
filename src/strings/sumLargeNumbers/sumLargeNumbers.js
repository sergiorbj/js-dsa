function sumLargeNumbers(s1,s2) {
    let result = ""
    let i = s1.length -1
    let j = s2.length -1

    if(s1 === "0") return s2
    if(s2 === "0") return s1

    let carry = 0

    while(i >= 0 || j >= 0 || carry > 0){
        const digit1 = i >= "0" ? s1[i] - "0" : 0
        const digit2 = j >= "0" ? s2[j] - "0" : 0

        const sum = digit1 + digit2 + carry

        const firstPlace = sum % 10

        carry = Math.floor(sum / 10)

        result = firstPlace + result


        i--
        j--
    }

    return result
}

export { sumLargeNumbers }