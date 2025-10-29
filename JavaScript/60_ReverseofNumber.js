// Program to reverse a number...

const ReverseofNumber = num => {
    let reverseNum = 0

    while (num > 0) {
        let digit = num % 10
        reverseNum = reverseNum * 10 + digit
        num = Math.floor(num / 10)
    }
    return reverseNum
}

console.log('Reverse of the number is : ', ReverseofNumber(12345));