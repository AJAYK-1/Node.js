// Program to check whether a given array of integers is sorted in ascending order...


const CheckSort = arr => {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i + 1] < arr[i]) return false
    }
    return true
}

console.log(CheckSort([1, 2, 3, 4, 5]));
console.log(CheckSort([1, 4, 3, 6, 5]));
