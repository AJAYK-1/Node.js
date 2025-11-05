// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints
// of the ith line are (i,0) and (i, height[i])
// Find 2 lines that togather with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount water a container can store...

const Container = height => {
    let store = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {
        const width = right - left
        const area = Math.min(height[left], height[right]) * width
        if (area > store) store = area
        if (height[left] < height[right]) left++
        else right--
    }
    return store
}

const height = [3, 2, 7, 4, 1, 3, 6, 2]
console.log(Container(height));

const height2 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(Container(height2));