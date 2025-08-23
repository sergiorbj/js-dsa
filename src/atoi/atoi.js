// https://www.geeksforgeeks.org/dsa/write-your-own-atoi/

function atoi(s) {
    // Create the auxiliar constants
    const INT_MAX = 2**31 -1
    const INT_MIN = -(2**31)

    let index = 0
    let sign = 1
    let result = 0


    // Skip white spaces at start
    while(index < s.length && s[index] === " "){
        index++
    }

    // Sign validation and char check
    if(s[index] === "-" || s[index] === "+"){
        if(s[index] === "-"){
            sign = -1
        }
        index++
    }

    // Convert digits
    while(index < s.length && s[index] >= "0" && s[index] <= "9") {
        const digit = s[index] - "0"


        // Handle overflow scenarios
        if(result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)){
            return sign === 1 ? INT_MAX : INT_MIN
        }

        result = result * 10 + digit
        index++
    }

    return result * sign
}

export { atoi };