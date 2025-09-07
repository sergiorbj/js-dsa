/**
 * Minimum Repeats to Make Substring
 * 
 * Given two strings s1 and s2, return the minimum number of times you need to repeat s1
 * so that s2 becomes a substring of the repeated s1. If it's impossible for s2 to be a
 * substring of s1 after repeating s1, return -1.
 * 
 * Example 1: s1 = "abcd", s2 = "cdabcdab"
 * - Repeat s1 once: "abcd" (s2 not found)
 * - Repeat s1 twice: "abcdabcd" (s2 not found) 
 * - Repeat s1 three times: "abcdabcdabcd" (s2 found: "cdabcdab")
 * Result: 3
 * 
 * Example 2: s1 = "abc", s2 = "cabca"
 * - Repeat s1 once: "abc" (s2 not found)
 * - Repeat s1 twice: "abcabc" (s2 found: "cabca")
 * Result: 2
 */

function minRepeatsSubstring(s1,s2){
    let repeated = s1
    let count = 1

    while(repeated.length < s2.length){
        repeated += s1
        count++
    }

    if(repeated.includes(s2)){
        return count
    }

    repeated += s1
    count++

    if(repeated.includes(s2)){
        return count
    }

    return -1
}

export { minRepeatsSubstring };