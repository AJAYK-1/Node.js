// Program to compare 2 objexts to determine if the first one contains the same
// properties as the second one (which may also have additional properties)

const objA = { a: 1, b: 2, c: 3 }
const objB = { a: 1, b: 2, c: 3 }
const objC = { a: 1, b: 2, d: 3 }

const objectsEqual = (a, b) => Object.keys(a).every(key => b[key])

console.log(objectsEqual(objA, objB));
console.log(objectsEqual(objA, objC));
