// Objects in JavaScript...

// Creating an object using object literal syntax
let person = {
    name: 'John Doe',
    age: 30,
    isEmployed: true,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log('Person Object -> ', person);

// Accessing properties
console.log('Name: ', person.name); // Dot notation
console.log('Age: ', person['age']); // Bracket notation
person.greet(); // Calling method

// Adding new properties
person.address = '123 Main St';
console.log('After adding address -> ', person);
person['phone'] = '555-1234';
console.log('After adding phone -> ', person);

// Modifying properties
person.age = 31;
console.log('After modifying age -> ', person);

// Deleting properties
delete person.isEmployed;
console.log('After deleting isEmployed -> ', person);

// Checking if a property exists
console.log('Has name? ', 'name' in person); // true
console.log('Has isEmployed? ', person.hasOwnProperty('isEmployed')); // false

// Iterating over properties
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

// Object methods
person.sayGoodbye = function () {
    console.log('Goodbye!', this.name);
}
person.sayGoodbye();

// Object.keys(), Object.values(), Object.entries()
console.log('Object Keys: ', Object.keys(person));
console.log('Object Values: ', Object.values(person));
console.log('Object Entries: ', Object.entries(person));

// Merging objects using Object.assign()
let job = {
    title: 'Software Developer',
    company: 'Tech Corp'
};
let employee = Object.assign({}, person, job);
console.log('Merged Object -> ', employee);

// Creating an object using the Object constructor
let car = new Object({ brand: 'BMW', model: 'X5', year: 2020 });
console.log('New Object using Object constructor -> ', car);

// Nested objects
let student = {
    name: 'Alice',
    grades: {
        math: 90,
        science: 85
    },
    getGrade: function (subject) {
        return this.grades[subject];
    }
};
console.log('Student Object -> ', student);
console.log('Math Grade: ', student.getGrade('math'));

// Object.freeze() and Object.seal()
let frozenObj = Object.freeze({ prop: 'I am frozen' });
frozenObj.prop = 'Trying to change'; // This will not change the property
console.log('Frozen Object -> ', frozenObj);
let sealedObj = Object.seal({ prop: 'I am sealed' });
sealedObj.prop = 'Changed'; // This will change the property
console.log('Sealed Object -> ', sealedObj);
sealedObj.newProp = 'New Property'; // This will not add a new property
console.log('After trying to add newProp to sealedObj -> ', sealedObj);

// Prototypes and Inheritance
let animal = {
    speak: function () {
        console.log(`${this.name} makes a noise.`);
    }
};
let dog = Object.create(animal);
dog.name = 'Rex';
dog.speak(); // Rex makes a noise.

// Object Destructuring
let { name, age } = person;
console.log('Destructured Name: ', name);
console.log('Destructured Age: ', age);
console.log('Destructured Address: ', person.address);

// Spread operator with objects
let updatedPerson = { ...person, age: 32, city: 'New York' };
console.log('Updated Person with Spread Operator -> ', updatedPerson);

// JSON (JavaScript Object Notation)
let jsonString = JSON.stringify(person);
console.log('JSON String -> ', jsonString);
let jsonObject = JSON.parse(jsonString);
console.log('Parsed JSON Object -> ', jsonObject);

// Note: Objects in JavaScript are dynamic and can be modified at runtime.
// They are also reference types, meaning that when you assign an object to another variable,
// you are assigning a reference to the same object in memory, not a copy of the object.

// shallow copy vs deep copy
let original = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, original);
let deepCopy = JSON.parse(JSON.stringify(original));
shallowCopy.b.c = 3;
console.log('Original after modifying shallow copy -> ', original);
deepCopy.b.c = 4;
console.log('Original after modifying deep copy -> ', original);
console.log('Shallow Copy -> ', shallowCopy);
console.log('Deep Copy -> ', deepCopy);
