// Given 2 strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise. 
// In other words, return true if one of s1's permutations is the substring of s2.


const PermutationString = (s1, s2) => {
    let hashMap = {}
    let left = 0
    let right = 0

    while (right < s2.length) {
        if (!hashMap[s2[right]]) hashMap[s2[right]] = 1
        else hashMap[s2[right]]++

        let check = false
        for (const element of s1) {
            if (hashMap[element]) check = true
            else {
                check = false
                break
            }
        }
        if (check) return true

        right++
        if (right - left > s1.length - 1) {
            hashMap[s2[left]]--
            if (hashMap[s2[left]] === 0) delete hashMap[s2[left]]
            left++
        }
    }
    return false
}

console.log(PermutationString('abc', 'asdacbxz'));
console.log(PermutationString('ab', 'aqwerb'));
console.log(PermutationString('ab', 'aazbac'));

