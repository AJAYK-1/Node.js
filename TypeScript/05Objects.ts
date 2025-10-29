let student: {
    name: string,
    age: number,
    isGraduate: boolean,
    marks?: number
} = {
    name: 'John',
    age: 20,
    isGraduate: false
}
console.log(student);
student.marks = 100
console.log(student);

let person: { readonly id: number, name: string } = {
    id: 12345,
    name: 'Ben'
}
console.log(person);
