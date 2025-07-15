// Largest number...
const readInput = require('readline-sync')

const a = readInput.questionInt("Enter 1st number: ")
const b = readInput.questionInt("Enter 2nd number: ")
const c = readInput.questionInt("Enter 3rd number: ")

if (a == b && b == c) {
    console.log("All numbers are equal.")
} else if (a > b && a > c) {
    console.log(a, " is the largest number.")
} else if (b > a && b > c) {
    console.log(b, " is the largest number.")
} else {
    console.log(c, " is the largest number.")
}
