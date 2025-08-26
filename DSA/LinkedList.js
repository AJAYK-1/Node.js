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

    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    getFirst() {
        if (!this.head) return `The list is empty`

        console.log(this.head);
    }

    getLast() {
        if (!this.head) return `This list is empty...`

        console.log(this.tail);
    }

    get(index) {
        if (!this.head) return `The list is empty`

        let temp = this.head
        let counter = 0
        while (temp) {
            if (counter == index) return temp
            counter++
            temp = temp.next
        }
        return `No index found`
    }

    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.data = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        let newNode = new Node(value)
        let temp = this.get(index - 1)
        if (temp) {
            newNode.next = temp.next
            temp.next = newNode
            this.length++
        } else return `Invalid Index`
    }

    size() {
        return this.length
    }

    clear() {
        this.head = null
    }

    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        // [this.head, this.tail] = [this.tail, this.head]
        let next = temp
        let prev = null
        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }

    }
}

const MyLinkedList = new LinkedList(3)

console.log(MyLinkedList);
MyLinkedList.push(4)
MyLinkedList.push(10)
console.log(MyLinkedList);
// MyLinkedList.pop()
// MyLinkedList.pop()
// MyLinkedList.pop()
// console.log(MyLinkedList.pop());
// MyLinkedList.shift()
MyLinkedList.unshift(15)
MyLinkedList.getFirst()
MyLinkedList.getLast()
console.log('--------------\n', MyLinkedList.get(1));
console.log(MyLinkedList.set(1, 20));
MyLinkedList.insert(1, 50)
MyLinkedList.insert(1, 70)
console.log(MyLinkedList.size());
console.log(MyLinkedList);
MyLinkedList.reverse()
console.log(MyLinkedList);

// console.log(MyLinkedList.clear());
