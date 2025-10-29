// Object Destructuring...
const obj = ({
    name: 'Ajay',
    age: 22,
    isStudent: true
})
console.log(obj)


// // Destructuring...
const { name, age } = obj
console.log(name)


// // Destructuring with renamed property...
const { name: StudentName } = obj
console.log(StudentName)


// Default value...
const { country = 'India' } = obj
console.log(country)


// Skipping elements...
const nums = [1, 2, 3, 4, 5]
const [, , third] = nums
console.log(third)


// Destructuring nested objects...
const place = {
    address: {
        state: 'Kerala',
        city: 'Eranakulam'
    }
}
const {address:{state,city}} = place
console.log(state,place)


// Example 1...
const user = {
  username: "ajay_1",
  email: "ajay@example.com",
  role: "developer"
};
const {username:userId, role} = user
console.log(userId)
console.log(role)


// Example 2...
const fruits = ["apple", "banana", "cherry", "mango"];
const [firstfruit,,thirdfruit] = fruits
console.log(firstfruit,thirdfruit)


// Example 3...
const user1 = { name: "Ajay", age: 23, city: "Kochi" };
(function({name, age} = user1){
    console.log(name,age)
})()


// Example 4...
const person = {
  fullName: "Ajay Kumar",
  contact: {
    email: "ajay@example.com",
    phone: "1234567890"
  },
  location: {
    city: "Kochi",
    country: "India"
  }
};
const {fullName:fname,contact:{email,},location:{City,}} = person
console.log(fname,email,City)