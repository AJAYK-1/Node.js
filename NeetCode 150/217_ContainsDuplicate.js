// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct...

const ContainsDuplicate = arr => {
    let hashSet = []
    for (let i = 0; i < arr.length; i++) {
        if (hashSet.includes(arr[i])) return true
        else hashSet.push(arr[i])
    }
    return false
}
// Time Complexity: O(n^2)) due to includes method inside loop
const elements1 = [2, 4, 7, 1, 1, 5]
const elements2 = [1, 2, 3, 4, 5]
console.log(ContainsDuplicate(elements1));
console.log(ContainsDuplicate(elements2));

// Better Solution
const ContainsDuplicate2 = arr => {
    let hashSet = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (hashSet.has(arr[i])) return true
        else hashSet.add(arr[i])
    }
    return false
}
// Time Complexity: O(n)
console.log(ContainsDuplicate2(elements1));
console.log(ContainsDuplicate2(elements2));


// Optimal Solution
const ContainsDuplicate3 = arr => {
    let hashSet = new Set(arr)
    return hashSet.size !== arr.length
}
// Time Complexity: O(n)
console.log(ContainsDuplicate3(elements1));
console.log(ContainsDuplicate3(elements2));