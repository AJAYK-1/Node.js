// Program to take an array and a chunck size as input and return an array where 
// the orignal array is split into smaller arrays of the given size.


const chunkArray = (arr, size) => {
    let chunk = []
    for (let i = 0; i < arr.length; i += size) {
        chunk.push(arr.slice(i, i + size))
    }
    return chunk
}


console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
