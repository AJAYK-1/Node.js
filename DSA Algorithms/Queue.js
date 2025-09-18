// Queue - FIFO...

class Node {
    constructor(value) {
        this.element = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value)
        this.front = newNode
        this.rear = newNode
        this.length = 1
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.front = newNode
            this.rear = newNode
            this.length++
        } else {
            this.rear.next = newNode
            this.rear = newNode
            this.length++
        }
    }

    dequeue() {
        if (this.length === 0) return undefined
        if (this.length === 1) {
            this.front = null
            this.rear = null
        } else {
            let temp = this.front
            this.front = this.front.next
            temp.next = null
            this.length--
        }
    }

    min() {
        if (this.length === 0) return undefined
        let minValue = this.front.element
        let current = this.front

        while (current.next) {
            current = current.next
            if (current.element < minValue)
                minValue = current.element
        }
        return minValue
    }
}


let NewQ = new Queue(50)
NewQ.enqueue(20)
NewQ.enqueue(10)
// NewQ.dequeue()
console.log('Minimum Value: ', NewQ.min());
console.log(NewQ);
