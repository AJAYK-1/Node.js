// Program to generate a random hexadecimal color code.

const RandomHexNum = () => Math.floor(Math.random() * 16).toString(16)

const ColorCode = () => '#' + Array.from({ length: 6 }).map(RandomHexNum).join('')

console.log(ColorCode());
console.log(ColorCode());
