// Program to find the number of even values upto a given number...

const EvenUptoLimit = limit => {
    let count = 0
    for (let i = 0; i <= limit; i++) if (i % 2 === 0) count++
    return count
}

console.log(EvenUptoLimit(100));
