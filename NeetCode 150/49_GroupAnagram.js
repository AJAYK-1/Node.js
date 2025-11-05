// Given an array of strings strs, group the anagrams togather.

const GroupAnagram = strArray => {
    if (strArray.length === 0) return `Empty Array...`
    else if (strArray.length === 1) return `[["${strArray}"]]`
    let hashMap = {}

    let sortedArray = strArray.map(words => words.split('').sort().join(''))

    for (let i = 0; i < sortedArray.length; i++) {
        if (!hashMap[sortedArray[i]]) hashMap[sortedArray[i]] = [strArray[i]]
        else hashMap[sortedArray[i]].push(strArray[i])
    }
    return Object.values(hashMap)
}

const arr1 = ['cat', 'rat', 'act', 'tar', 'car']
console.log(GroupAnagram(arr1));
const arr2 = ['a']
console.log(GroupAnagram(arr2));
