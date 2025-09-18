// Selection sort...

const SelectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

const arr = [2, 9, 6, 3, 1, 5, 8, 7, 0, 4]
console.log(SelectionSort(arr));
