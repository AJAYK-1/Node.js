// Count the number of occurence of each words...
const text = 'Hello this this this is is JavaScript'

const WordCounter = str => {
    const wordMap = {}
    const words = str.toLowerCase().split(' ')
    for (const word of words) {
        if (word in wordMap) {
            wordMap[word]++
        } else {
            wordMap[word] = 1
        }
    }
    return wordMap
}

console.log(WordCounter(text));
