// Insertion sort...

const InsertionSort = arr => {
    for (let i = 1; i < arr.length; i++)
        for (let j = 1; j < arr.length; j++)
            if (arr[j - 1] > arr[j])
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
    return arr
}

const arr = [5, 2, 3, 1, 4]
console.log(InsertionSort(arr));
