// Prime number...
const rl = require('readline-sync')

const input = rl.questionInt('Enter a number: ')

let isPrime = true
for (i = 2; i < input; i++) {
    if (input % i == 0) {
        isPrime = false
        break
    }
}

if (isPrime) {
    console.log(`${input} is a Prime number.`)
} else {
    console.log(`${input} is not a Prime number.`)
}


// n prime numbers...
const read = require('readline-sync')

const initial = read.questionInt('Enter the starting number: ')
const limit = read.questionInt('Enter the limit: ')

let arrayPrime = []
for (i = initial; i < limit; i++) {
    let Prime = true
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            Prime = false
            break
        }
    }
    if (Prime) {
        arrayPrime.push(i)
    }
}

if (arrayPrime.length > 0) {
    console.log(`Prime numbers between ${initial} and ${limit} are => ${arrayPrime}`)
} else {
    console.log(`There are no prime numbers between ${initial} and ${limit}.`)
}
