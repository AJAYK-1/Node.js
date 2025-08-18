// Program to find which of given number is neares to 100...

const NearestTo100 = num1 => num2 => Math.abs(100 - num1) > Math.abs(100 - num2) ? num2 : num1

console.log(NearestTo100(102)(99), ' is the closest to 100...');
console.log(NearestTo100(80)(50), ' is the closest to 100...');
