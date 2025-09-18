// Regex(Regular Expressions) in JavaScript...

let sampleText = "The quick brown fox jumps over the lazy dog. The dog barked.";

// Creating regex patterns...
let regex1 = /dog/;
let regex2 = new RegExp('fox', 'i'); // 'i' for case-insensitive

// test() -> Test if a pattern exists in the string...
console.log('Test for "dog": ', regex1.test(sampleText)); // true
console.log('Test for "FOX": ', regex2.test(sampleText)); // true

// exec() -> Execute a search for a match in a string...
let execResult = regex1.exec(sampleText);
console.log('Exec result for "dog": ', execResult); // ["dog", index: 40, input: "..."]

// match() -> Get all matches of a pattern in a string...
let matchResult = sampleText.match(/the/gi); // 'g' for global, 'i' for case-insensitive
console.log('Match result for "the": ', matchResult); // ["The", "the"]

// replace() -> Replace occurrences of a pattern with a replacement string...
let replacedText = sampleText.replace(/dog/g, 'cat');
console.log('Replaced Text: ', replacedText); 

// split() -> Split a string into an array using a regex pattern...
let wordsArray = sampleText.split(/\s+/); // Split by whitespace
console.log('Words Array: ', wordsArray);

// search() -> Search for a pattern and return the index of the first match...
let searchIndex = sampleText.search(/fox/);
console.log('Search index for "fox": ', searchIndex); // 16

// Flags in regex...
let globalRegex = /the/g; // Global search
let multiLineRegex = /^The/m; // Multiline search
let unicodeRegex = /\u{1F600}/u; // Unicode search (grinning face emoji)
console.log('Global regex test: ', globalRegex.test(sampleText));
console.log('Multiline regex test: ', multiLineRegex.test(sampleText));
console.log('Unicode regex test: ', unicodeRegex.test('😀')); 

// Advanced patterns...
let digitRegex = /\d+/; // Matches one or more digits
let wordBoundaryRegex = /\bfox\b/; // Matches 'fox' as a whole word
console.log('Digit regex test: ', digitRegex.test('There are 2 dogs'));
console.log('Word boundary regex test: ', wordBoundaryRegex.test(sampleText));

// Lookahead and Lookbehind...
let lookaheadRegex = /fox(?=\s)/; // 'fox' followed by a space
let lookbehindRegex = /(?<=\s)dog/; // 'dog' preceded by a space
console.log('Lookahead regex test: ', lookaheadRegex.test(sampleText));
console.log('Lookbehind regex test: ', lookbehindRegex.test(sampleText));

// Quantifiers...
let quantifierRegex = /o{2,}/; // Matches 'o' occurring 2 or more times
console.log('Quantifier regex test: ', quantifierRegex.test('zoo'));
console.log('Quantifier regex test: ', quantifierRegex.test('hello'));

// Anchors...
let startAnchorRegex = /^The/; // String starts with 'The'
let endAnchorRegex = /barked\.$/; // String ends with 'barked.'
console.log('Start anchor regex test: ', startAnchorRegex.test(sampleText));
console.log('End anchor regex test: ', endAnchorRegex.test(sampleText));

// Grouping and capturing...
let groupRegex = /(dog|fox)/g; // Matches 'dog' or 'fox'
let groupMatches = sampleText.match(groupRegex);
console.log('Group matches: ', groupMatches); // ["fox", "dog", "dog"]

// Non-capturing groups...
let nonCapturingGroupRegex = /(?:dog|fox)/g;
let nonCapturingMatches = sampleText.match(nonCapturingGroupRegex);
console.log('Non-capturing group matches: ', nonCapturingMatches); // ["fox", "dog", "dog"] 

// Backreferences...
let backreferenceRegex = /(\b\w+)\s+\1/g; // Matches repeated words
let backreferenceMatches = "hello hello world".match(backreferenceRegex);
console.log('Backreference matches: ', backreferenceMatches); // ["hello hello"]

// Sticky flag...
let stickyRegex = /The/y; // Sticky search
console.log('Sticky regex test (first): ', stickyRegex.test(sampleText));
