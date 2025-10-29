// Object declaration...
const person = ({
    name: 'Ajay Kumar',
    age: 23,
    gender: 'Male',
    isStudent: true
})


// Accessing objects and it's properties...
console.log(person)
console.log('Name =>', person.name)
console.log('Age =>', person['age'])
console.log('Gender =>', person.gender)


// Modified object value...
person['isStudent'] = false
if (person.isStudent) {
    console.log('Is a student...')
} else {
    console.log('Is Not a student...')
}


// Adding new property...
person.city = 'North Paravur'
console.log(person)


// Deleting property...
delete person.city
console.log(person)


// function as property...
const greetings = ({
    head: 'Hello',
    tail: function () { console.log(`${this.head} World...`) }
})
greetings.tail()


// Looping through properties...
for (property in person) {
    console.log(property, ':', person[property])
}


// Nested objects...
const person2 = ({
    name: 'Ajay',
    address: {
        district: 'Eranakulam',
        city: 'North Paravur',
        pincode: 683520
    }
})
console.log(person2)
console.log('City =>', person2.address.city)


// Array of objects...
const books = [
    { name: 'Mahabharatam', author: 'Vedhavyasa', pages: 1000 },
    { name: 'Goosebumbs', author: 'R L Stain', pages: 100 },
    { name: 'Harry Potter', author: 'J K Rowling', pages: 500 }
]
console.log(books)
console.log(books[0])
console.log(books[0].name)


// Adding new object into array...
books.push({ name: 'Wings of Fire', author: 'APJ Abdul Kalam', pages: 300 })
console.log(books)


// Removing objects from the array...
books.splice(1, 1)
console.log(books)


// Iterate through array objects using map function...
const bookNames = books.map((book) => book.name)
console.log(bookNames)


// Using filter function...
const bookPages = books.filter((book) => book.pages <= 600)
console.log(bookPages)


// search in an array of objects...
function search(searchElement) {
    const element = books.find((book) => book.name.toLowerCase() === searchElement.toLowerCase())
    return element
}
console.log(search('harry potter'))