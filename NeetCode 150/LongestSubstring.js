// Given a string s, find the length of the longest substring without repeating characters.

const LongestSubString = s => {
    let left = 0
    let right = left
    let length = 0
    let hashSet = []

    while (right < s.length) {
        right++

        if (length < right - left) 
            length = right - left
    }
}

const s1 = 'abcabcbb'
console.log(LongestSubString(s1));
const s2 = 'iambatman'
console.log(LongestSubString(s2));