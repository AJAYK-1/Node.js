// Design an algorithm to encode a list of strings to a string. 
// The endoed string is then sent over the network and 
// is decoded back to the orignal list of strings...

const StringEncode = arrStr => arrStr.join('#')

const str1 = ['hello', 'world', 'I', 'Love', 'JavaScript']
let encoded_string = StringEncode(str1)
console.log(encoded_string);

const StringDecode = str => str.split('#')

console.log(StringDecode(encoded_string));
