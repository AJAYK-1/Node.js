// Given a string s, find the length of the longest substring without repeating characters.

const LongestSubString = s => {
    let left = 0
    let right = 0
    let subLength = 0
    let hashSet = new Set()

    while (right < s.length) {
        const letter = s[right]
        if (!hashSet.has(letter)) {
            hashSet.add(letter)
            subLength = Math.max(subLength, hashSet.size)
            right++
        } else {
            hashSet.delete(s[left])
            left++
        }
    }    
    return subLength
}

const s1 = 'abcabcbb'
console.log(LongestSubString(s1));
const s2 = 'iambatman'
console.log(LongestSubString(s2));