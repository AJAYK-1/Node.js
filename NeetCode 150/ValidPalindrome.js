// Given a string s, return true if it is a plindrome or false otherwise...

const ValidPlindrome = s => {
    if (s.length <= 1) return true
    const validStr = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    for (let i = 0; i < validStr.length / 2; i++) {
        if (validStr[i] !== validStr[validStr.length - 1 - i]) return false
    }
    return true
}

const str1 = 'A man, a plan, a canal: Panama'
console.log(ValidPlindrome(str1));
const str2 = 'Race a car.'
console.log(ValidPlindrome(str2));