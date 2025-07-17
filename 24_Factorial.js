// Factorial of a number...
const rl = require('readline-sync')

function Factorial(n) {
    fact = 1
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact
}

const n = rl.questionInt('Enter a number: ')
console.log('Factorial of number => ', Factorial(n))


// Different approach...
const FactorialOfNum = (n) => {
    return n === 0 ? 1 : n * FactorialOfNum(n - 1);
}

console.log('Factorial: ', FactorialOfNum(n))