// Fibonacci series...
const rl = require('readline-sync')

function Fibonacci(n) {
    let series = [0, 1]
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2])
    }
    return series
}

const n = rl.questionInt('Enter n of series: ')
console.log(Fibonacci(n))


// Different approach...
const Fibo = (n) => {
    let [a, b] = [0, 1]
    let f = []
    if (n >= 1) {
        f.push(a)
    }
    if (n >= 2) {
        f.push(b)
    }
    for (let i = 2; i < n; i++) {
        let next = a + b
        f.push(next)
        a = b
        b = next
    }
    return f
}

console.log(Fibo(n))