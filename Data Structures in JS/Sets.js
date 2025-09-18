// Sets in JavaScript...

let mySet = new Set([1, 2, 3, 4, 5]);

console.log('New Set -> ', mySet);

// Add elements to the set...
mySet.add(6);
mySet.add(3); // Duplicate, won't be added
console.log('After adding elements -> ', mySet);

// Check if an element exists...
console.log('Set has 4? ', mySet.has(4)); // true
console.log('Set has 10? ', mySet.has(10)); // false

// Get the size of the set...
console.log('Size of the set: ', mySet.size); // 6

// Remove an element...
mySet.delete(2);
console.log('After deleting 2 -> ', mySet);

// Convert set to array...
let setToArray = Array.from(mySet);
console.log('Set to Array: ', setToArray);

// Clear the set...
mySet.clear();
console.log('After clearing the set -> ', mySet); // Set(0) {}

// WeakSet -> Holds weakly referenced objects...
let obj1 = { name: 'Object 1' };
let obj2 = { name: 'Object 2' };
let myWeakSet = new WeakSet([obj1]);
console.log('WeakSet has obj1? ', myWeakSet.has(obj1)); // true
console.log('WeakSet has obj2? ', myWeakSet.has(obj2)); // false

mySet.keys(); // Returns an iterator of the values in the Set
mySet.values(); // Same as keys()
mySet.entries(); // Returns an iterator of [value, value] pairs
