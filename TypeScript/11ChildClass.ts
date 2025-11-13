// Parent...
class Parent {
    protected familyName: string

    constructor(name: string) {
        this.familyName = name
    }
}

class Child extends Parent {
    introductionFamily() {
        console.log('Out family name is', this.familyName);
    }
}

const parent1 = new Parent('Shyam')
const child1 = new Child('Goku')

child1.introductionFamily()