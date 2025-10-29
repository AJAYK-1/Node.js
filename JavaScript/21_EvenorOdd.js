// Even or Odd...
const readline = require('readline-sync')

function EvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(num, 'is Even.')
    } else {
        console.log(num, 'is Odd.')
    }
}

const num = readline.questionInt('Enter a number: ')
EvenOrOdd(num)


// Different approach...
const OddorEven = (num) => {
    return num % 2 === 0 ? 'The number is Even.' : 'The number is Odd.'
}
console.log(OddorEven(num))