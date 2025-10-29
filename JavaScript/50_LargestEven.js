// Program to find the largest even number...

const LargestEven = arr => {
    let largest = 0
    for (let number of arr) {
        if (number % 2 === 0) if (largest < number) largest = number
    }
    return largest
}

console.log(LargestEven([1, 2, 3, 4, 5, 6]));
console.log(LargestEven([1, 10, 3, 7, 5, 6]));


// Method 2...
const EvenLargest = arr => Math.max(...arr.filter(num => num % 2 === 0))

console.log(EvenLargest([1, 2, 4, 8, 3, 7, 9]))