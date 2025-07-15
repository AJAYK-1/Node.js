// Array Basics...
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr1)


// map function basic...
const arr2 = [101, 2000, 34, 40, 57, 605, 77, 888, 99, 111]
arr2.map((element,index)=>{
    console.log(index, ' => ',element)
})


// Concatination of arrays...
console.log('Arrays after concatination => ',arr1.concat(arr2))


// Join operation on arrays...
console.log('Join function (-) => ',arr1.join(' - '))