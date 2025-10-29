// Arithmetic Operations...
const readNumber = require('readline-sync')

const a = readNumber.questionFloat('Enter first element: ')
const b = readNumber.questionFloat('Enter second elements: ')

console.log(`${a} + ${b} = `, a + b)
console.log(`${a} - ${b} = `, a - b)
console.log(`${a} * ${b} = `, a * b)
console.log(`${a} / ${b} = `, a / b)
console.log(`${a} % ${b} = `, a % b)