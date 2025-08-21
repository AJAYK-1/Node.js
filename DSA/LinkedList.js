// Linked List...

class Node {
    constructor(value) {
        this.data = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    pop() {
        if (!this.head) {
            return `The list is empty`
        }

        let temp = this.head
        let prev = this.head

        while (temp.next) {
            prev = temp
            temp = prev.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    shift() {
        if (!this.head) {
            return `This list is empty...`
        }
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--

        if (this.length === 0) this.tail = null
    }
}

const MyLinkedList = new LinkedList(3)

console.log(MyLinkedList);
MyLinkedList.push(4)
MyLinkedList.push(10)
console.log(MyLinkedList);
MyLinkedList.pop()
// MyLinkedList.pop()
// MyLinkedList.pop()
// console.log(MyLinkedList.pop());
MyLinkedList.shift()
console.log(MyLinkedList);

