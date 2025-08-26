// https://www.geeksforgeeks.org/dsa/find-largest-word-dictionary-deleting-characters-given-string/

function isSubSequence(word, string){
    let i = 0
    let j = 0

    while(i < word.length && j < string.length){
        if(word[i] === string[j]){
            i++
        }

        j++
    }

    return i === word.length
}

function largestWordSubSequence(dict, string) {
    let largestWord = ""

    for(const word of dict){
        if(isSubSequence(word, string)){
            if(word.length > largestWord.length){
                largestWord = word
            }
        }
    }

    return largestWord
}


export { largestWordSubSequence }