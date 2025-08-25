// Doubly Linked List...

class Node {
    constructor(value) {
        this.prev = null
        this.data = value
        this.next = null
    }
}


class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            this.length++
            return;
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) console.log(`The List is empty...`);
        else if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length--
        } else {
            const temp = this.tail
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
            this.length--
        }
    }

    unshift(value) {
        if (this.length === 0) this.push(value)
        else {
            const newNode = new Node(value)
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
            this.length++
        }
    }
}

let MyDLL = new DoublyLinkedList(3)

console.log(MyDLL);
MyDLL.push(10)
MyDLL.push(33)
// MyDLL.pop()
MyDLL.unshift(55)

console.log(MyDLL);

