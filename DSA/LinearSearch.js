// Linear search implementation in JavaScript...

const LinearSearch = (arr, target) => {
    for (const element of arr) {
        // console.log('Loop run number:', arr.indexOf(element)+1);
        if (element === target) return arr.indexOf(element)
    }
    return false
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
console.log(LinearSearch(arr1, 15));
console.log(LinearSearch(arr1, 50));