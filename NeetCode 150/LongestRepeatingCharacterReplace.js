// Given a string s and an integer k, You can choose any character of the string and change it to any other uppercase English character.
// You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operation...

const LongestCharReplace = (s, k) => {
    let left = 0
    let right = 0
    let MaxCount = 0
    let hashMap = {}

    while (right < s.length) {
        if (s[right] in hashMap) {
            hashMap[s[right]]++
        } else {
            hashMap[s[right]] = 1
        }
        MaxCount = Math.max(hashMap[s[right]], MaxCount)
        if (right - left + 1 - MaxCount > k) {
            hashMap[s[left]]--
            left++
        }
        right++
    }
    return right - left
}

console.log(LongestCharReplace('ABAB', 2));
console.log(LongestCharReplace('HPHPHDF', 4));
console.log(LongestCharReplace("AABABBA", 1))
