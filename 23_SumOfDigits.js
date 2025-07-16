// Sum of Digits of a number...
const rl = require('readline-sync')

function SumOfDigits(n) {
    let sum = 0
    while (n > 0) {
        num = n % 10
        sum += num
        n = Math.floor(n / 10)
    }
    return sum
}

const n = rl.questionInt('Enter a number: ')
console.log('Sum of Digits fo the number => ', SumOfDigits(n))


// Different approach...
const SoD = (n) => {
    return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
}

console.log('Sum of digits: ', SoD(n))