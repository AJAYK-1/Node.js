// Given an integer aray nums, return all the triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0...

const ThreeSum = nums => {
    if (nums.length < 3) return []
    if (nums.length === 3 && nums[0] + nums[1] + nums[2] === 0) return [nums[0], nums[1], nums[2]]
    if (nums.length === 3 && nums[0] + nums[1] + nums[2] !== 0) return []

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
    }

    let result = []

    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1
        let k = nums.length - 1

        while (j < nums.length && k > i && j !== k) {
            if (nums[j] + nums[k] === -(nums[i])) {
                result.push([nums[i], nums[j], nums[k]])
                break
            }
            if (nums[j] + nums[k] > -(nums[i])) k--
            if (nums[j] + nums[k] < -(nums[i])) j++
        }
    }
    return result
}

const arr1 = [-1, 0, 1, 2, -1, -4]
console.log(ThreeSum(arr1));
const arr2 = [0, 1, 1]
console.log(ThreeSum(arr2));