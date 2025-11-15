// Generic class 'User'
class User<T> {
    constructor(public value: T) { }

    show(msg: T): void {
        console.log(`${msg}, ${this.value}`);
    }
}

let user1 = new User<string>('Ajay')
console.log(user1.value);
user1.show('Hello')