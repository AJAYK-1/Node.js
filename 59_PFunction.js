// Problem to return true if the provided funvtion returns true for all elemnets in a collection, flase...

console.log([1, 2, 3, 4, 5].every(x => x > 0));
console.log([1, 2, 3, 4, 5].every(x => x < 0));


const isEveryElement = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) return false
    }
    return true
}

const arr = [10, 20, 30, 40, 50]
console.log(isEveryElement(arr, (x) => x > 0));
