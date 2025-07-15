// while loop...
const rl = require('readline-sync')

let num = rl.question('Enter a number: ')
while (num <= 10) {
    console.log(`Currently the num is ${num}`)
    num++
}
console.log('Exited from the loop because the current value is ', num)



// do while loop...
do {
    console.log('This will execute atleast once')
    console.log('The current value is ', num)
    num--
} while (num >= 10)