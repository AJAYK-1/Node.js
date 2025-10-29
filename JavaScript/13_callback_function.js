// Call back function...
function F1(a, callback) {
    console.log(a, callback())    // F1 prints 'Hello' and callback -> F3 
}

function F2() {
    F1('Hello', F3)               // F2 calls F1 with text 'Hello' and F3(callback) as parameter
}

function F3() {
    return 'World!!!'             // F3 prints 'World!!!'
}

F2()                              // F2 is called (Starts here)


// Callback with arrow,anonymous functions...
function second(value, cb) {
    console.log(value)
    cb()
};
(function () {
    second('Hai ', () => console.log('This is callback...'))
})
    ()