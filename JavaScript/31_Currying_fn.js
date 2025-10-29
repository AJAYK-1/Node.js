// Currying function...
function First(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log('Sum => ', First(1)(2)(3))


// Currying arrow function...
const Currying = a => b => a * b;

console.log('Product => ', Currying(10)(20))


// url example...
const urlParser = protocol => domain => path => {
    return `${protocol}://${domain}/${path}`
}

console.log('URL => ', urlParser('https')('google.com')('signIn'))