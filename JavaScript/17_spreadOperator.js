// Spread Operator...
const student = {
    name: 'Ajay',
    email: 'ajay@email.com',
    age: 22
}
const clone = {...student}
console.log(clone)


// Merging objects using spread...
const address = {
    district: 'Eranakulam',
    place:'North Paravur'
}
const details ={...student,...address}
console.log(details)


// Merging arrays...
const a = [1,2,3,4,5]
const b = [6,7,8,9,10]
const combined = [...a,...b]
console.log(combined)