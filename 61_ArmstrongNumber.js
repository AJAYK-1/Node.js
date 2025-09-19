// Program to check if a number is an Armstrong number or not...

const isArmstrongNumber = num => {
    let sum = 0
    let temp = num
    let power = num.toString().length

    while (temp > 0) {
        let digit = temp % 10
        sum += digit ** power
        temp = Math.floor(temp / 10)
    }
    return sum === num
}

console.log(isArmstrongNumber(153)); 
console.log(isArmstrongNumber(123));
console.log(isArmstrongNumber(9474));