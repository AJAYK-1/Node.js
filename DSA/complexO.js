// O(n^2) -> compares n elements to n other elements, so n^2...

const numbers = [1, 2, 3, 4, 5]

const compareNums = arr => {
    for (let num of arr) {
        for (let num2 of arr) {
            if (num < num2) console.log(`${num} < ${num2}`);
        }
    }
    return ``
}

console.log(compareNums(numbers));
