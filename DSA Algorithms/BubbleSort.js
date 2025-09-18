// Bubble sort...

const BubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }
        }
    }
    return arr
}

const arr = [2, 6, 4, 1, 9, 8, 0, 7, 5, 3]
console.log(BubbleSort(arr));
