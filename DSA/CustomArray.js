// Custom array and its operations...

class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    push(element) {
        this.data[this.length] = element
        this.length++
        console.log(this.data);
    }

    get(index) {
        return this.data[index]
    }

    pop() {
        delete this.data[this.length - 1]
        this.length--
    }

    shift() {
        for (let i = 1; i < this.length; i++) {
            this.data[i - 1] = this.data[i]
        }
        delete this.data[this.length - 1]
        this.length--
    }

    deleteByIndex(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }
}

const myNewArray = new MyArray()

myNewArray.push('apple')
myNewArray.push('mango')
myNewArray.push('Banana')
console.log(myNewArray.get(2));
console.log(myNewArray.get(0));
// myNewArray.pop()
// myNewArray.shift()
myNewArray.deleteByIndex(1)

console.log('New Array => ', myNewArray.data);
