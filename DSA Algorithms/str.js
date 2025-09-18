const Palindrome = str => {
    let pal = ''
    for (let i = str.length - 1; i >= 0; i--) {
        pal += str[i]
    }
    if (pal === str) return 'It is a palindrome'
    else return 'Not a palindrome'
}


console.log(Palindrome('malayalam'));

const pal = str => str.split('').reverse().join('') === str ? 'Palindrome' : 'not a palindrome'

console.log(pal('aha'));
