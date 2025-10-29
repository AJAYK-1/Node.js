// Check Prime number...
const readline = require('readline-sync')

const Prime = (n) => {
    let isprime = false
    if (n == 1 || n == 2) return 'The number is prime.'
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isprime = false
            break
        } else {
            isprime = true
        }
    }
    return isprime ? 'The number is prime.' : 'The number is not prime.'
}

const n = readline.questionInt('Enter a number: ')
console.log(Prime(n))


// Different approach...
const CheckPrime = (n) => {
    if (n < 1) return false
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
    }
    return true
}
console.log(CheckPrime(n) ? 'Prime number.' : 'Not a prime number.')