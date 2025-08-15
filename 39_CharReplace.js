// programs to reaplace every character in a given string with 
// the character following it in the alphabet...

// string.fromCharCode
// charCodeAt

const CharReplace = str =>
    str.split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('')

console.log(CharReplace('ajay kumar'));
