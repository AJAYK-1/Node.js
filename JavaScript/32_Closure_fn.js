// Closure function...
function RememberThis(msg) {
    return function() {
        return console.log(`Hello ${msg}`)
    }
}

const thatMsg = RememberThis('World')
thatMsg()