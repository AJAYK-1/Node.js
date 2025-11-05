// Given 2 strings str1 and str2, return trye if str2 is an anagram of str1, and false otherwise...

const ValidAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false
    let map = {}

    for (let letter of str1) {
        if (!map[letter]) {
            map[letter] = 1
        } else {
            map[letter]++
        }
    }

    for (let letter of str2) {
        if (map[letter] === undefined) return false
        if (map[letter] < 1) return false
        map[letter]--
    }
    return true
}

console.log(ValidAnagram('cat', 'act'));
console.log(ValidAnagram('cat', 'car'));
