// Stack - LIFO...

class Node {
    constructor(value) {
        this.element = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
            this.length++
        } else {
            newNode.next = this.top
            this.top = newNode
            this.length++
        }
        // return this
    }

    pop() {
        if (this.length === 0) return undefined
        let temp = this.top
        this.top = temp.next
        temp.next = null
        this.length--
    }
}

let NewStack = new Stack(10)
NewStack.push(20)
NewStack.push(30)
NewStack.pop()
console.log(NewStack);
