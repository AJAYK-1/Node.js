// Program to find the number of even digits in an array of integer...


const EvenDigits = arr => {
    let count = 0
    for (let num of arr) {
        if (num % 2 === 0) count++
    }
    return count
}

console.log(EvenDigits([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// Method 2...
const EvenElements = arr => arr.filter(num => num % 2 === 0).length

console.log(EvenElements([1, 2, 3, 4, 5, 6]));
