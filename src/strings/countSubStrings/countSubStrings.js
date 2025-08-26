// https://www.geeksforgeeks.org/dsa/substring-equal-number-0-1-2/

function countSubStringBruteForce(s) {
    let countSub = 0

    for(let i = 0; i < s.length; i++){
        let c0 = 0
        let c1 = 0
        let c2 = 0

        for(let j = i; j < s.length; j++){
            if(s[j] === "0") c0++
            if(s[j] === "1") c1++
            if(s[j] === "2") c2++

            if(c0 === c1 && c1 === c2){
                countSub++
            }
        }
    }

    return countSub
}

function countSubStringOptimized(s){
    let countSub = 0

    let c0 = 0
    let c1 = 0
    let c2 = 0

    const map = new Map()

    map.set("0#0", 1)

    for(let i = 0; i < s.length; i++){
        if(s[i] === "0") c0++
        if(s[i] === "1") c1++
        if(s[i] === "2") c2++

        const key = `${c1 - c0}#${c2 - c1}`

        if(map.has(key)){
            countSub += map.get(key)

            map.set(key, map.get(key) + 1)
        } else {
            map.set(key, 1)
        }
    }

    return countSub
}

export { countSubStringBruteForce, countSubStringOptimized }