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

const elements1 = [2, 4, 7, 1, 1, 5]
const elements2 = [1, 2, 3, 4, 5]
console.log(ContainsDuplicate(elements1));
console.log(ContainsDuplicate(elements2));