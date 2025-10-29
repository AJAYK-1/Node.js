// if else statement...
const readlineSync = require('readline-sync')

const num = readlineSync.questionInt("Enter a number: ")
if (num == 0) {
    console.log(num, ' is neither odd nor even.')
} else if(num % 2 == 0) {
    console.log(num, ' is even.')
} else {
    console.log(num, ' is odd.')
}

