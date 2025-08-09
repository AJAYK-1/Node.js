// Reversing words in a sentence...
const reverseWords = (sentece) => {
    return sentece.split(' ').reverse().join(' ')
}

console.log(reverseWords('I love Coding'));


// Different approach...
const senteceReverse = (sentece) => {
    const statement = sentece.split(' ')
    let reverseStatement = []
    for (let i = statement.length - 1; i >= 0; i++) {
        reverseStatement.push(statement[i])
    }
    return reverseStatement.join(' ')
}

console.log(senteceReverse('I am a Full Stack Developer'));
