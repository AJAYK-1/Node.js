// Given an unsorted array of integers nums, 
//  return the length of the longest consecutive elements sequence.

const LongestConsecutiveSequence = nums => {
    if (nums.length === 0) return nums
    let lcs = 0
    const numSet = new Set(nums)

    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num + 1
            let currentCount = 1

            while (numSet.has(currentNum)) {
                currentCount++
                currentNum++
            }

            if (currentCount > lcs) lcs = currentCount
        }
    }
    return lcs
}

const arr1 = [100, 4, 2, 1, 3]
console.log(LongestConsecutiveSequence(arr1));

const arr2 = [1, 1, 100, 3, 4, 100, 2, 2]
console.log(LongestConsecutiveSequence(arr2));

const arr3 = [5, 4, 3, 2, 1]
console.log(LongestConsecutiveSequence(arr3));
