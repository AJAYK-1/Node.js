let userName: string = 'Ajay'
console.log(userName);

let age: number = 23
console.log(age);

let bool: boolean = true
console.log(bool);

let x: any = 'Hi there'
console.log(x);

let y: any = 100
console.log(y);

let z: unknown = 100
console.log(z);

let n: null = null
console.log(n);

// Union types...
let regNum: string | number = 'Ajay'
console.log(regNum);
regNum = 12345
console.log(regNum);


// Custom types...
type ID = string | boolean
let userId: ID = true
console.log(userId);
userId = 'Ajay123'
console.log(userId);
