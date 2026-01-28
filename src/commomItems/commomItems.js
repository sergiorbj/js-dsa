/**
 * Common Items
 * 
 * Given two arrays, determine if they have at least one common item.
 * Returns true if there is any element that exists in both arrays, false otherwise.
 * 
 * Example: 
 * - isCommomItem(['a', 'b'], ['c', 'd']) returns false
 * - isCommomItem(['a', 'b'], ['b', 'c']) returns true (both have 'b')
 * - isCommomItem(['x', 'y', 'z'], ['a', 'x', 'b']) returns true (both have 'x')
 */

function isCommomItem(n, m) {
    let isCommom = false

    for(let i = 0; i < n.length; i++){
        for(let j = 0; j < m.length; j++){
            if(n[i] === m[j]) {
                isCommom = true
            }
        }
    }

    return isCommom
}

export { isCommomItem };