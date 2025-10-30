// normal function...
function Area(length: number, width: number): number {
    return length * width
}
console.log(Area(2, 3));

// Functions with default parameters...
function Volume(length: number, width: number, height: number = 4): number {
    return length * width * height
}
console.log(Volume(2, 3));

// inifinite parameters...
function Addall(...nums: number[]): number {
    let sum: number = 0
    for (const num of nums) {
        sum = sum + num
    }
    return sum
}
console.log(Addall(1, 2, 3, 4, 5, 6));

// Arrow function...
const Arrow = (name: string): string => `Hi, ${name}`
console.log(Arrow('ajay'));

// Void...
function greet(name: string): void {
    console.log('Hello,', name);
}
greet('John')