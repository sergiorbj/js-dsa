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

function wordFromSequence(sequence) {

    const map = new Map()

    for(const currentSequence of sequence){
        const [from, to] = currentSequence.split('>')
        map.set(from,to)
    }

    const origins = [...map.keys()]
    const destinations = [...map.values()]

    const firstLetter = origins.find(letter => !destinations.includes(letter))

    let word = firstLetter
    let currentLetter = firstLetter

    while(map.has(currentLetter)){
        currentLetter = map.get(currentLetter)
        word += currentLetter
    }

    return word
}

export { wordFromSequence };