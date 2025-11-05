// Given a 1- indexed array of integers numbers that is already sorted in non-decreasing order,
// find 2 numbers such that they add up to a specific target number...

const TwoSum2 = (numbers, target) => {
    let left = 0
    let right = numbers.length - 1
    while (right >= 0 && left < numbers.length) {
        if (numbers[left] + numbers[right] === target) return [left + 1, right + 1]
        else if (numbers[left] + numbers[right] > target) right--
        else if (numbers[left] + numbers[right] < target) left++
    }
    return 'No match exists...'
}

const numbers = [2, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(TwoSum2(numbers, 15));
console.log(TwoSum2(numbers, 10));
console.log(TwoSum2(numbers, 100));
