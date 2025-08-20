// Program to reverse an integer...

const reverseInt = integer => integer.toString().split('').reverse().join('')

console.log(reverseInt(12345));


// Method 2...
const IntRev = int => {
    let revInt = 0
    for (let i = 0; int > 0; i++) {
        let n = int % 10
        revInt = revInt * 10 + n
        int = Math.floor(int/10)
    }
    return revInt
}

console.log(IntRev(12345));
