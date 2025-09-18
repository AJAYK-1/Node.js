// Arrays in JavaScript...
let fruits = ['Apple', 'Banana', 'Cherry'];
let numbers = new Array(1, 2, 3, 4, 5);
console.log(fruits);

// push() -> Add to the end of the array...
fruits.push('Orange');
console.log(fruits);

// pop() -> Remove from the end of the array...
let popedFruit = fruits.pop()
console.log('Poped array element: ', popedFruit);
console.log(fruits);

// unshift() -> Add to the beginning of the array...
fruits.unshift('Mango');
console.log(fruits);

// shift() -> Remove from the beginning of the array...
let shiftedFruit = fruits.shift();
console.log('Shifted array element: ', shiftedFruit);
console.log(fruits);

// indexOf() -> Get the index of an element...
let index = fruits.indexOf('Banana');
console.log('Index of Banana: ', index);

// splice() -> Remove or replace elements...
fruits.splice(1, 1, 'Grapes')
console.log(fruits);

// slice() -> Get a sub-array...
let subArray = fruits.slice(0, 2);
console.log('Sliced Sub-array: ', subArray);

// length -> Get the length of the array...
console.log('Length of fruits array: ', fruits.length);

// forEach() -> Iterate over the array (does not return values)...
fruits.forEach((fruits, index) => {
    console.log(`forEach -> Element at index ${index} : ${fruits}`);
})

// map() -> Create a new array by transforming each element...
let upperFruits = fruits.map(fruit => fruit.toUpperCase())
console.log('map -> Uppercase Fruits: ', upperFruits);

// filter() -> Create a new array with elements that pass a test...
let filteredFruits = fruits.filter(fruit => fruit.startsWith('A'))
console.log('filter -> Fruits starting with A: ', filteredFruits);

// find() -> Find the first element that passes a test...
let foundFruit = fruits.find(fruit => fruit.length > 5)
console.log('find -> First fruit with length > 5: ', foundFruit);

// every() -> Check if all elements pass a test...
let allNumbers = numbers.every(num => num>0)
console.log('every -> Are all numbers > 0? ', allNumbers);

// some() -> Check if at least one element passes a test...
let someNumbers = numbers.some(num => num > 3)
console.log('some -> Is there any number > 3? ', someNumbers);

// reduce() -> Reduce the array to a single value...
let concatenatedFruits = fruits.reduce((acc, fruit) => acc + ', ' + fruit)
console.log('reduce -> Concatenated Fruits: ', concatenatedFruits);

// sort() -> Sort the array...
fruits.sort();
console.log('Sorted Fruits: ', fruits);

// reverse() -> Reverse the array...
fruits.reverse();
console.log('Reversed Fruits: ', fruits);

// includes() -> Check if an array contains a certain element...
let hasBanana = fruits.includes('Banana');
console.log('includes -> Does the array include Banana? ', hasBanana);
console.log('includes Apple?: ', fruits.includes('Apple'));

// concat() -> Merge two or more arrays...
let moreFruits = ['Pineapple', 'Kiwi'];
let allFruits = fruits.concat(moreFruits);
console.log('concat -> All Fruits: ', allFruits);

// join() -> Join all elements of an array into a string...
let fruitString = fruits.join(' - ');
console.log('join -> Fruit String: ', fruitString);

// Array.isArray() -> Check if a variable is an array...
console.log('Array.isArray(fruits): ', Array.isArray(fruits));

// spread operator(...) -> Expand an array into individual elements...
let newFruits = ['Strawberry', ...fruits, 'Blueberry']
console.log('Spread Operator -> New Fruits: ', newFruits);

// Destructuring...
const [firstNum, secondNum, ...restNums] = numbers
console.log('Destructured Numbers: ', firstNum, secondNum, restNums);

// Nested Arrays...
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Nested Array (Matrix): ', matrix);
console.log('Element at matrix[1][1]: ', matrix[1][1]);

// Multidimensional Arrays...
let threeDArray = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
console.log('3D Array: ', threeDArray);
console.log('Element at threeDArray[1][0][1]: ', threeDArray[1][0][1]);

// Iterating using for...of loop...
for (let fruit of fruits) {
    console.log('for...of -> Fruit: ', fruit);
}

// Iterating using for...in loop...
for (let index in fruits) {
    console.log(`for...in -> Index: ${index}, Fruit: ${fruits[index]}`);
}

// Iterating using traditional for loop...
for (let i = 0; i < fruits.length; i++) {
    console.log(`Traditional for loop -> Index: ${i}, Fruit: ${fruits[i]}`);
}

// Iterating using while loop...
let i = 0;
while (i < fruits.length) {
    console.log(`while loop -> Index: ${i}, Fruit: ${fruits[i]}`);
    i++;
}

// Iterating using do...while loop...
i = 0;              
do {
    console.log(`do...while loop -> Index: ${i}, Fruit: ${fruits[i]}`);
    i++;
} while (i < fruits.length);

// Nested loop to print a 2D array...
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}
