// Create an array with 5 students names, then create function which takes 2 parameters (allStudents & studentName)
// iterate over all students and find that specific user 'studentName'


// Data Structure...
const studentData = ['Ajay', 'Arun', 'Swaroop', 'Pranav', 'Krishnan']


// Algorithm to find an item from the DS...
const findStudent = allStudents => studentName => {
    for (let students of allStudents) {
        if (students === studentName) return `Found student: ${studentName}`
    }
    return 'User Not found...'
}
// O(n) => n is number of items in the DS...
// Time complexity increases with increaseing number of items (n)...

console.log(findStudent(studentData)('Swaroop'));
