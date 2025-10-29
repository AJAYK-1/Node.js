// Program to check a given string contains 2 to 4 occurences of a spedified character...

const CharOccurrence = str => a => {
    let count = 0
    for (let chars of str) {
        if (chars === a) count++
    }
    return count
}

console.log(CharOccurrence('JavaScript')('a'));


// Method 2...
const occurences = str => char => str.split('').filter(ch => ch === char).length

console.log(occurences('Ajay Kumar')('a'));


// 2 to 4 occurences...
const OccCharacter = str => a => occurences(str, a) >= 2 && occurences(str, a) <= 4

console.log(OccCharacter('hello world')('l'))