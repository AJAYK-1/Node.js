// Given an integer array nums and an integer k, return the k most frequent elements.

const KFrequentElements = (nums, k) => {
    if (nums.length === 0) return nums
    let hashMap = {}

    for (let num of nums) {
        if (num in hashMap) hashMap[num]++
        else hashMap[num] = 1
    }

    let Karray = Object.keys(hashMap)
        .sort((a, b) => hashMap[b] - hashMap[a])
        .map(Number)
        .slice(0, k)

    return Karray
}

const arr1 = [1, 1, 1, 2, 2, 3]
console.log(KFrequentElements(arr1, 2));
const arr2 = [1, 2, 3, 4, 4, 4, 5, 6, 7, 6, 2]
console.log(KFrequentElements(arr2, 3));

