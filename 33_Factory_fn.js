// Factory function...
const Student = (fname, lname) => {
    return {
        fname,
        lname,
        fullname: () => {
            return console.log(`Full Name: ${fname} ${lname}`)
        },
        greet: () => {
            return console.log(`Hello ${fname}...`)
        }
    }
}

const std1 = Student('Ajay', 'Kumar')
const std2 = Student('James', 'Bond')
std1.fullname()
std2.fullname()
std1.greet()