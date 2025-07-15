// Basic function...
const readline = require('readline-sync')

function firstCall(thatWord) {
    console.log('JavaScript is', thatWord, '!!!')
}
console.log('JavaScript is ______')
const word = readline.question('Enter a suitable word: ')
firstCall(word)


// Default function...
function defaultFunction(thatN = 'nice') {
    console.log('Node.js is ', thatN, '...')
}
console.log('Node.js is ______')
const n = readline.question('Enter a suitable word: ')
defaultFunction()
defaultFunction(n)


// Function that returns value...
function sample(number1, number2) {
    return (number1 + number2)
}
const result = sample(10, 20)
console.log('Sum => ', result)


// Arrow function...
const Arrow = name => console.log(`Welcome ${name}`);   // No need for parenthesis if single parameter...
Arrow('Ajay')

const Arrow2 = (a, b) => a + b                          // Multiple parameters...
console.log('Sum => ', Arrow2(1, 9))

const Arrow3 = () => console.log("Hello World!!!")      // No parameters...
Arrow3();


// Anonymous function...
(function() {
    console.log('I am Anonymous...')
})();