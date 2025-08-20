// Class, object and constructors in JavaScript...

class Car {
    constructor(mycolor) {
        this.color = mycolor
    }

    getModel() {
        return 'SUV'
    }
}

// Objects...
const myCar1 = new Car('red')
const myCar2 = new Car('black')

console.log(myCar1.color);
console.log(myCar1.getModel());
console.log(myCar2);
