// Capitalize first element from the string...

const Capitalize = str => str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

console.log(Capitalize('hello WORLD'));
