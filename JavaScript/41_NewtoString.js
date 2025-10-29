// Program to create a new string adding "New!" in front of a given string.
// If the given string begins with "New!" already then retun the orignal string.

const NewToString = (str) => {
    return str.indexOf('New!') === 0 ? str
        : `New! ${str}`
}

console.log(NewToString('New! to this place.'));
console.log(NewToString('Offers...'));
