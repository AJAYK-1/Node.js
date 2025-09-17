// Quick sort in JavaScript...

const QuickSort = arr => {
    if (arr.length <= 1) return arr
    const pivot = arr[arr.length - 1]
    let left = -1
    let right = 0
    while (right < arr.length - 1) {
        if (arr[right] < pivot) {
            left++
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }
        right++
    }
    [arr[left + 1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[left + 1]]
    // console.log('left:', left, 'right:', right);
    // console.log(arr);
    return [...QuickSort(arr.slice(0, left + 1)), arr[left + 1], ...QuickSort(arr.slice(left + 2))]
}

const arr1 = [5, 1, 3, 2, 4]
console.log(QuickSort(arr1));
const arr2 = [10, 7, 8, 9, 1, 5, 6, 3, 2, 4, 11, 15, 14, 13, 12]
console.log(QuickSort(arr2));