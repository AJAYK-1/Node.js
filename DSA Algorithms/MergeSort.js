// Merge Sort...

const DandC = left => right => {
    const result = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    result.push(...left.slice(i))
    result.push(...right.slice(j))
    return result
}

const MergeSort = arr => {
    if (arr.length <= 1) return arr
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)
    return DandC(MergeSort(left))(MergeSort(right))
}

const arr = [5, 4, 3, 2, 1]
console.log(MergeSort(arr));
