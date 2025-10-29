// Problem to create a new string from the given string taking the 1st 3 chars 
// and the last 3 chars of a string and adding them togather. The string length must
// be 3 or more, if not, the orignal string is returned...

const charsReplace = (str) => {
    let newStr = ''
    str.length >= 3 ?
        newStr = str[0] + str[1] + str[2] + str[str.length - 3] + str[str.length - 2] + str[str.length - 1]
        : newStr = str;
    return newStr
}

console.log(charsReplace('ajay Kumar'));
console.log(charsReplace('hi'));


// Method 2...
const makeNewString = (str) => str.length <= 3 ? str : str.slice(0, 3) + str.slice(-3)

console.log(makeNewString('Hello World'));
console.log(makeNewString('Hi'));