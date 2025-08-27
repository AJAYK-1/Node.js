// Given a list of numbers and a target number.
// Find 2 numbers in that list that add up to the target number.
// Also specify the index of these 2 numbers.


// Time complexity = O(n^2)
const TwoSum = array => target => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target)
                return `${array[i]} + ${array[j]} = ${target}, elements at positions ${i} and ${j}...`
        }
    }
}


console.log(TwoSum([9, 1, 2, 5, 3, 6, 4])(9));
console.log(TwoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])(15));


// Using a Hash Map...
// Time Complexity = O(n)
const Sum2 = array => target => {
    const hashMap = {}
    for (let i = 0; i < array.length; i++) {
        const compliment = target - array[i]
        if (compliment in hashMap) {
            return `${compliment} + ${array[i]} = ${target}, at positions ${hashMap[compliment]} and ${i}`
        }
        hashMap[array[i]] = i
    }
    return `No elements found...`
}

console.log(Sum2([1, 2, 5, 3, 6, 4])(9));