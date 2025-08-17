// Program to concatnate 2 strings except their first character...

const concatnate = str1 => str2 => str1.slice(0, 1) + str2.slice(0, 1)

console.log(concatnate('Hello')('World'));
