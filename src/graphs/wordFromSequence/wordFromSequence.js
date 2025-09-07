/**
 * Word From Sequence
 * 
 * Given an array of letter sequences in the format ["A>B", "C>D", ...], 
 * reconstruct the original word by following the sequence chain.
 * Each sequence represents that one letter comes immediately before another.
 * 
 * Example: ["A>I", "S>P", "I>N", "P>A"] should return "SPAIN"
 * - S comes before P
 * - P comes before A  
 * - A comes before I
 * - I comes before N
 * Result: S → P → A → I → N = "SPAIN"
 */

function wordSequence(sequence) {

    const map = new Map()

    for(const pointer of sequence){
        const [from,to] = pointer.split(">")
        map.set(from, to)
    }

    const origins = [...map.keys()]
    const destinations = [...map.values()]

    let firstLetter = origins.find(letter => !destinations.includes(letter))
    
    let word = firstLetter
    let current = firstLetter

    while(map.has(current)){
        current = map.get(current)
        word += current
    }

    return word
}

export { wordSequence };