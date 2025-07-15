// Basic string operations...
const rl = require('readline-sync')

const input = rl.question('Enter a number: ')
console.log("This is a string (+100) => ",input+100)

// Convert string to number...
console.log("Now this is a number(+100) => ", Number(input) + 100)

// Convert string to integer...
console.log("Now this is an integer(+100) => ", parseInt(input) + 100)

// Convert string to float...
console.log("Now this is a float(+100.5555) => ", parseFloat(input) + 100.5555)


// convert array to string...
const arr2 = [101, 2000, 34, 40, 57, 605, 77, 888, 99, 111]
console.log('This is a string => ', arr2.toString())


// Convert to lower case...
const text = 'JavaScript is the best'
console.log('Orignal string => ', text)
console.log('xx-----------------------------------xx')
console.log("Lower Case => ", text.toLowerCase())

// Convert to upper case...
console.log("Upper case => ", text.toUpperCase())

// Length of the string...
console.log("Length of the string => ", text.length)

// Accessing individual characters in the string...
console.log("Character at 2nd position => ", text[2])

// using charAt function...
console.log("Character at 3rd position(charAt) => ", text.charAt(3))

// Trims spaces...
console.log("After trimming => ", text.trim())

// slice string...
console.log("After slicing 5th position to 10th character => ", text.slice(5, 10))

// substring from string...
console.log("Substring from 4th position character => ", text.substring(10))

// start with...
console.log("Start with Java? => ", text.startsWith("Java"))

// ends with...
console.log("Ends with 'best'? => ", text.endsWith('best'))

// Includes substring...
console.log("Does it include 'Java'? => ", text.includes('Java'))

// Replace substring...
console.log("Replace 'Java' with 'Type' => ", text.replace('Java', 'Type'))

// Split string...
console.log('After Split (space) => ', text.split(' '))

// repeat the string...
console.log('Repeats the string 2 times => ', text.repeat(2))

// concat string...
console.log('After concatenating "!!!" => ', text.concat('!!!'))

// Iterate the characters of a string...
console.log('Iterate using for-of loop => ')
for (letters of text) {
    console.log(letters)
}

