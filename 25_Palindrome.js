// Checking whether a string is palindrome or not...
const readline = require('readline-sync')

function Palindrome(str) {
    pal = ''
    for (let i = str.length - 1; i >= 0; i--) {
        pal += str[i]
    }
    console.log(pal)
    return pal.toLowerCase() == str.toLowerCase() ? 'The string is a Palindrome.' : 'The string is not a palindrome.';
}

const str = readline.question('Enter a string: ')
console.log(Palindrome(str))


// Different approach...
const Palin = (str) => {
    return str.toLowerCase() == str.split('').reverse().join('').toLowerCase() ? 'It is Palindrome.' : 'It is not Palindrome.';
}
console.log(Palin(str))