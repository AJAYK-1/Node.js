// Reverse of a String...
const rl = require('readline-sync')

function ReverseString(str) {
    let reverseStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr
}

const str = rl.question('Enter a String: ')
console.log('Reverse of the string => ', ReverseString(str))


// Different approach...
const StringReverse = (str) => {
    return str.split('').reverse().join('')
}
console.log('Reverse : ', StringReverse(str))