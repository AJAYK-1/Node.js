// Program to extract the first half of a string of even length...

const FirstHalf = str => str.slice(0, str.length / 2)

console.log(FirstHalf('Hello this is a new World!'));
console.log(FirstHalf('Hello!'));
