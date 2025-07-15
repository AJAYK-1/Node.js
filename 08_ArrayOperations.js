// basic array inputs...
const rl = require('readline-sync')

let arrayNums = []
const limit = rl.questionInt('Enter the limit of array: ')

console.log(`Enter ${limit} numbers: `)
for (i = 0; i < limit; i++) {
    let nums = rl.questionInt('')
    arrayNums.push(nums)
}
console.log('Orignal array => ', arrayNums)


// map function -> Double array numbers using map function...
let doubledArray = arrayNums.map((num) => num * 2)
console.log('Doubled array using map function => ', doubledArray)


// filter function -> Filters elements in an array...
const filnum = rl.questionInt('Enter number to filter: ')
let filteredArray = arrayNums.filter((num) => num < filnum)
console.log(`The numbers less than ${filnum} in array are => `, filteredArray)


// reduce function -> perform a single operation combining all the array elements...
const sum = arrayNums.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
const product = arrayNums.reduce((previousValue, currentValue) => previousValue * currentValue, 1)
console.log('Sum of all the array elements => ', sum)
console.log('Product of all the array elements => ', product)


// unshift -> insert at beggining of an array...
const newNum = rl.questionInt('Enter number to insert at beginning: ')
arrayNums.unshift(newNum)
console.log('New array => ', arrayNums)


// pop -> delete last element form the array...
arrayNums.pop()
console.log('Array after pop => ',arrayNums)


// shift -> delete first element from an array...
arrayNums.shift()
console.log('Array after shift => ',arrayNums)


// sort function -> sorts alphabetically not numberically as default...
arrayNums.sort()
console.log('Sorted array => ',arrayNums)
// sort numerically in ascending order...
arrayNums.sort((a,b) => a - b)
console.log('Ascending order => ',arrayNums)
// sort numerically in descending order...
arrayNums.sort((a,b) => b - a)
console.log('Descending order => ',arrayNums)


// reverse function -> reverse the array elements...
arrayNums.reverse()
console.log('Reversed array => ',arrayNums)


// includes function -> check for elements in array...
const checkelement = rl.questionInt('Enter element to check: ')
let isElement = arrayNums.includes(checkelement)
if(isElement) {
    console.log('Element exist in array...')
} else{
    console.log('Element does not exist...')
}


// indexOf -> checks position of an element in array...
const elementPos = rl.questionInt('Enter element to check: ')
const position = arrayNums.indexOf(elementPos)
if (position == -1) {      // returns -1 if element does not exist in the array...
    console.log('Element does not exist...')
} else {
    console.log(`Position of ${elementPos} in array => `, position)
}


// slice -> returns specific part (elements between specified indexes) of the array...
const part = arrayNums.slice(0, 3)
console.log('The elements sliced form 0 to 3 are => ', part)


// splice -> remove elements after specified index and a range...
arrayNums.splice(3, 2)       // removes element using splice...
console.log('The array after splice => ', arrayNums)
// Insertion using splice...
const newele = rl.questionInt('Enter element to insert: ')
const pos = rl.questionInt('Enter position to insert: ')
arrayNums.splice(pos, 0, newele)        // Insert element at specified position (0 means remove 0 elements)...
console.log('New array after splice insertion => ', arrayNums)


// flatMap -> insert element after every elements in the array...
const eleN = rl.questionInt('Enter element to insert: ')
const newArr = arrayNums.flatMap((num) => [num,eleN])
console.log('Array after flatMap => ',newArr)