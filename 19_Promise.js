// Promise...
const promise = new Promise((resolve, reject) => {
    const isPromiseCompleted = true
    if (isPromiseCompleted) {
        resolve('Promise Complete...')
    } else {
        reject('Promise Rejected...')
    }
})

promise
    .then((response) => console.log(response))  // These are executed on response..
    .catch((error) => console.log(error))


// Promise with set timeout...
const task = new Promise((res, rej) => {
    return setTimeout(() => {
        res('Task Completed!')
    }, 2000);
})
task
    .then((resp) => console.log(resp))