// Given n non-negative integers representing an elevation map where the width of each bar is 1.
// Compute how much rain it can store after raining...

const TrappingRainWater = height => {
    let left = 0
    let right = height.length - 1
    let storage = 0
    let leftMax = height[0]
    let rightMax = height[right]

    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(height[left], leftMax)
            if (leftMax - height[left] > 0)
                storage = storage + leftMax - height[left]
            left++
        } else {
            rightMax = Math.max(height[right], rightMax)
            if (rightMax - height[right] > 0)
                storage = storage + rightMax - height[right]
            right--
        }
    }
    return storage
}

const arr1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(TrappingRainWater(arr1));
