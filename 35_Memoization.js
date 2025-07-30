// Momoization...
function Memoize() {
    const cache = {};
    return function fib(n) {
        if (n in cache) return cache[n];
        if (n <= 1) return n;

        cache[n] = fib(n-1) + fib(n-2);
        return cache[n]
    }
}

const fib = Memoize()
console.log(fib(50))