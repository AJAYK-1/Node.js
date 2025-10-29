// Just Printing Hello World!...
let name = 'ajay'
console.log(name)
name = '1'
console.log(name)
num = 2
console.log(name + num)


// Recieve an input using readline(default in Node.js)...
const readline = require('readline')

const readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

readInput.question('Enter something:', (something) => {
    console.log(`You Entered -> ${something}`)
    readInput.close()
})


// Using readline-sync(install)...
const readlineSync = require('readline-sync')

const inputHere = readlineSync.question(`Enter Something: `)
console.log(`You entered -> ${inputHere}`)