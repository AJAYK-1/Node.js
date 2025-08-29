// Binary Search Tree...
class Node {
    constructor(value) {
        this.data = value
        this.leftNode = null
        this.rightNode = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }

        let temp = this.root
        while (temp) {
            if (newNode.data < temp.data) {
                if (temp.leftNode === null) {
                    temp.leftNode = newNode
                    return this
                } else {
                    temp = temp.leftNode
                }
            } else {
                if (temp.rightNode === null) {
                    temp.rightNode = newNode
                    return this
                } else {
                    temp = temp.rightNode
                }
            }
        }
    }

    search(value) {
        if (!this.root) return `The tree is empty...`
        if (this.root.data === value) return `${value} is in the root node.`

        let temp = this.root
        while (temp) {
            if (value < temp.data) temp = temp.leftNode
            else if (value > temp.data) temp = temp.rightNode
            else if (value === temp.data) return `Element found...`
        }
        return `No element found...`
    }

    bfs(){
        let queue = []
        let elements = []
        let temp = this.root

        queue.push(temp)
        
    }
}

const tree = new BST()
tree.insert(10)
tree.insert(5)
tree.insert(12)
tree.insert(20)
console.log(tree);
console.log(tree.search(20));
console.log(tree.search(50));

