// Validate Paranthesis...

const isValidParanthesis = str => {
    let stack = []
    const brackets = { '{': '}', '[': ']', '(': ')' }

    for (const char of str) {
        if (brackets[char]) stack.push(char)
        else {
            let topElement = stack.pop()
            if (brackets[topElement] !== char) return false
        }
    }
    return true
}

console.log(isValidParanthesis('()[]'));
console.log(isValidParanthesis('{()}'));
console.log(isValidParanthesis('{(]'));
