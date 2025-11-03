// Union Types...
let element: string | number
element = "abcd"
console.log(element);
element = 25
console.log(element);

// Literal Type...
let direction: "left" | "right" | "up" | "down"
direction = "left"
console.log(direction);

// Nullable Types...
let username: null | string
username = "Ajay"
console.log(username);

// Type Alias...
type StringOrNumber = string | number
let uname: StringOrNumber = "John"
console.log(uname);
let age: StringOrNumber = 23
console.log(age);

// Intersection types...
type FirsType = {
    name: string,
    age: number
}
type SecondType = {
    phone: string
}
type NewType = FirsType & SecondType
let ob: NewType = {
    name: "Ben",
    age: 50,
    phone: "12345667898"
}
console.log(ob);
