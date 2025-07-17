// Count vowels in a string...
const rl = require('readline-sync')

function CheckVowels(input) {
    let count = 0
    let str = input.toLowerCase()
    for (let i = 0; i < input.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count++;
        }
    }
    return count
}

const input = rl.question('Enter a string: ')
console.log('Number of vowels in the string => ', CheckVowels(input))


// Using match()...
const NumVowels = (input) => {
    return input.match(/[aeiou]/gi)?.length || 0
}

console.log('Number of vowels: ', NumVowels(input))


// Using indexOf()...
const Vow = (input) => {
    let count = 0
    let vowels = 'aeiouAEIOU'
    for (let i = 0; i < input.length; i++) {
        if (vowels.indexOf(input[i]) !== -1) {
            count++
        }
    }
    return count
}
console.log('Number of vowels = ',Vow(input))


// Using includes()...
const FindVowels = (input) => {
    let count = 0
    let vowels = 'aeiouAEIOU'
    for(const charachter of input) {
        if(vowels.includes(charachter)) {
            count++
        }
    }
    return count
}
console.log('Vowels => ', FindVowels(input))