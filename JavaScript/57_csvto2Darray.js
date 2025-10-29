// Program to convert a comma-separated values (CSV) string to a 2D array.
// A new line indicates a new row in the array.

const CSVto2D = csvStr => csvStr.split('\n')

const str = `qwe, rty, uio
jkl, asd, fgh
zxc, vbn, mlp`

console.log(CSVto2D(str));
