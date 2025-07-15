// Basic switch...
const rl = require('readline-sync')

const opt = rl.question('Do you know JavaScript? (yes/no): ')

switch (opt) {
    case 'yes':
        console.log('Wow! That is cool...')
        break;
    case 'no':
        console.log('You should learn it...')
        break;
    default:
        console.log('Invalid input!')
        break;
}