// Sum of all numbers in an array...
const rl = require('readline-sync')

const SumArray = (arr) => {
    let sum = 0
    for (const number of arr) {
        sum += number
    }
    return sum
}

const n = rl.questionInt('Enter array limit: ')
console.log(`Enter ${n} elements: `)
let arr = []
for (let i = 0; i < n; i++) {
    arr.push(rl.questionInt('Enter element => '))
}

console.log('Sum of all elements: ', SumArray(arr))


// Using reduce()...
const ArraySum = (arr) => {
    return arr.reduce((prev, curr) => prev + curr, 0)
}
console.log('sum => ', ArraySum(arr))