// Second largest in an array...
const readline = require('readline-sync')

const SecondLargest = (arr) => {
    let l = arr[0]
    let sl = 0
    for (let i = 1; i < arr.length; i++) {
        if (l < arr[i]) {
            sl = l
            l = arr[i]
        } else if (sl < arr[i] && l > arr[i]) {
            sl = arr[i]
        }
    }
    return sl
}

const n = readline.questionInt('Limit of the array: ')
console.log(`Enter ${n} elements: `)
let arr = []
for (let i = 0; i < n; i++) {
    arr.push(readline.questionInt('Enter element => '))
}
console.log('Second Largest element in the array => ', SecondLargest(arr))


// Using spread and Set()...
const Second = (arr) => {
    let newArr = [...new Set(arr)]
    newArr.sort((a,b) => b-a)
    return newArr[1]
}
console.log('Second largest: ', Second(arr))