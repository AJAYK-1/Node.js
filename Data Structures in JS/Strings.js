// String in JavaScript...

let sampleString = "Hello, JavaScript!";
let str2 = new String("I love JavaScript");

// Length of the string...
console.log('Length of sampleString: ', sampleString.length);

// Accessing characters...
console.log('Character at index 0: ', sampleString[0]);
console.log('Character at index 7: ', sampleString.charAt(7));

// String methods...
console.log('toUpperCase: ', sampleString.toUpperCase());
console.log('toLowerCase: ', sampleString.toLowerCase());
console.log('Includes "Java": ', sampleString.includes('Java'));
console.log('Starts with "Hello": ', sampleString.startsWith('Hello'));
console.log('Ends with "Script!": ', sampleString.endsWith('Script!'));
console.log('Index of "Java": ', sampleString.indexOf('Java'));
console.log('Slice (7, 11): ', sampleString.slice(7, 11));
console.log('Replace "JavaScript" with "World": ', sampleString.replace('JavaScript', 'World'));

// split() -> Split the string into an array...
let wordsArray = sampleString.split(' ');
console.log('Split by space: ', wordsArray);

// trim() -> Remove whitespace from both ends...
let stringWithSpaces = "   Hello, World!   ";
console.log('Trimmed string: ', stringWithSpaces.trim());

// concat() -> Concatenate strings...
let greeting = "Hello";
let place = "World";
console.log('Concatenated string: ', greeting.concat(', ', place, '!'));

// repeat() -> Repeat the string...
console.log('Repeat "Ha" 3 times: ', 'Ha'.repeat(3));

// template literals -> Embedding expressions...
let Name = "Ajay";
let age = 25;
console.log(`My name is ${Name} and I am ${age} years old.`);

// escape sequences...
console.log('Line1\nLine2');
console.log('Tab\tSpace');
console.log('Single Quote: \' ');
console.log("Double Quote: \" ");
console.log('Backslash: \\ ');
console.log('Backtick: \` ');
console.log('Dollar Sign: \$ ');
console.log('Carriage Return: Hello\rWorld');
console.log('Backspace: ABC\bD');
console.log('Form Feed: Hello\fWorld');
console.log('Vertical Tab: Hello\vWorld');

// raw strings -> Using String.raw to get raw string...
let rawString = String.raw`C:\Users\Ajay\Documents`;
console.log('Raw String: ', rawString);             

// Unicode in strings...
let unicodeString = '\u0041\u0042\u0043';
console.log('Unicode String: ', unicodeString); // ABC

// charCodeAt() -> Get Unicode of character at a specific index...
console.log('Unicode of character at index 0: ', sampleString.charCodeAt(0)); // H -> 72
console.log('Unicode of character at index 7: ', sampleString.charCodeAt(7)); // J -> 74

// fromCharCode() -> Create string from Unicode values...
let fromCharCodeString = String.fromCharCode(72, 101, 108, 108, 111);
console.log('String from Unicode values: ', fromCharCodeString); // Hello

// localeCompare() -> Compare two strings in the current locale...
let strA = "apple";
let strB = "banana";
console.log('Comparing "apple" and "banana": ', strA.localeCompare(strB)); // -1
console.log('Comparing "banana" and "apple": ', strB.localeCompare(strA)); // 1

// match() -> Match a string against a regular expression...
let regex = /JavaScript/;
let matchResult = sampleString.match(regex);
console.log('Match result for "JavaScript": ', matchResult);

// search() -> Search for a match using a regular expression...
let searchResult = sampleString.search(/World/);
console.log('Search result for "World": ', searchResult); // -1 (not found)
// If found, returns the index of the first match, otherwise -1.

// replaceAll() -> Replace all occurrences of a substring...
let replaceAllString = "JavaScript is great. I love JavaScript!";
let newString = replaceAllString.replaceAll("JavaScript", "JS");
console.log('After replaceAll: ', newString); // "JS is great. I love JS!"

// padStart() -> Pad the string at the start...
let paddedStart = "5".padStart(3, '0');
console.log('Padded Start: ', paddedStart); // "005"

// padEnd() -> Pad the string at the end...
let paddedEnd = "5".padEnd(3, '0');
console.log('Padded End: ', paddedEnd); // "500"

// toString() -> Convert to string...
let num = 123;
console.log('Number to String: ', num.toString()); // "123"

// valueOf() -> Get the primitive value of a String object...
let strObj = new String("Hello");
console.log('Primitive value of String object: ', strObj.valueOf()); // "Hello"

// normalize() -> Normalize the string to a specific Unicode form...
let accentedString = "é";
let normalizedString = accentedString.normalize('NFD');
console.log('Normalized String: ', normalizedString); // "é" (e + ́)
