// Given an array of integers nums and an integer target, return indices of the 2 numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const TwoSum = (arr, target) => {
    let hashMap = {}
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]
        if (complement in hashMap) return `${hashMap[complement]}, ${i}`
        hashMap[arr[i]] = i
    }
    return `No element found...`
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(TwoSum(arr, 15));
console.log(TwoSum(arr, 11));
