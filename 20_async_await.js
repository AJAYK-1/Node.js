// async and await...
const waitForResult = async () => {
    return new Promise((res) => {
        setTimeout(() => {
            res('Few Moments Later...')
        }, 2000);
    })
}

console.log('Starting...')
const result = await waitForResult()
console.log(result)
console.log('Ending...')


// Without async and await...
const waiting = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Still waiting...')
        }, 2000);
    })
}

console.log('Starting...')
const result2 = waiting()       // Does not wait for result...
console.log(result2)
console.log('Ending...')