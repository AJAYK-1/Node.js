// Program to replace the first digit in a string with '$' character...

const ReplaceDigit = str => {
    const nums = '0123456789'
    let newstr = ''
    let firstdigitChanged = true
    for (let char of str) {
        if (nums.indexOf(char) !== -1 && firstdigitChanged) {
            newstr += '$'
            firstdigitChanged = false
        }
        else newstr += char
    }
    return newstr
}


console.log(ReplaceDigit('hello345'));
console.log(ReplaceDigit('12345JavaScript54321'));


const Replace = str => str.replace(/[0-9]/, '$')

console.log(Replace('12Hi'));
console.log(Replace('Hi05'));
