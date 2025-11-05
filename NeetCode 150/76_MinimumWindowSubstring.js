// Given 2 strings s and t of lengths m and n respectively, return the minimum window substring
// of such that every character in t (including duplicates) is included in the window.
// If there is no such substring, return empty string ""...

const MinimumWindowSubstring = (s, t) => {
    if (s.length < t.length) return '""'
    if (s === t) return t

    let tempStr = ''
    let left = 0
    let right = 0
    let hashMap = {}

    while (right < s.length) {
        if (!hashMap[s[right]]) hashMap[s[right]] = right
        else hashMap[s[right]]++
        tempStr += s[right]
        right++

        for (const element of t) {
            if (element in hashMap ) delete hashMap[element]
            
        }
    }
    return hashMap
}

console.log(MinimumWindowSubstring('ADOBECODEBANC', 'ABC'));
console.log(MinimumWindowSubstring('a', 'a'));
console.log(MinimumWindowSubstring('a', 'aa'));