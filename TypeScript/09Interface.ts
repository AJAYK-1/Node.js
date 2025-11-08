// Interface...
interface Person {
    name: string,
    age: number,
    greet(message: string): void;
}

const Ajay: Person = {
    name: 'Ajay',
    age: 23,
    greet(message: string) {
        console.log(`Hi, ${this.name} and ${message}`);

    }
}
console.log(Ajay);
Ajay.greet('this is TS.')