// Rest operator...
const obj = {
    name:'Ajay',
    age:22,
    email:'ajay@email.com'
}

const {name,...rest} = obj
console.log(name)
console.log(rest)


// Example...
const student = {
  Name: "Ajay",
  grade: "A",
  age: 22,
  city: "Kochi"
};
const {Name,...details} = student
console.log(Name)
console.log(details)