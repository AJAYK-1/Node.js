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

    includes(value) {
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

    bfs() {
        let queue = []
        let elements = []
        let temp = this.root

        queue.push(temp)
        while (queue.length) {
            temp = queue.shift()
            elements.push(temp.data)

            if (temp.leftNode) queue.push(temp.leftNode)
            if (temp.rightNode) queue.push(temp.rightNode)
        }
        return elements
    }

    dfsPreOrder(node = this.root, data = []) {
        if (node === null) return data
        data.push(node.data)

        if (node.leftNode) this.dfsPreOrder(node.leftNode, data)
        if (node.rightNode) this.dfsPreOrder(node.rightNode, data)
        return data
    }

    dfsPostOrder(node = this.root, data = []) {
        if (node === null) return data
        if (node.leftNode) this.dfsPostOrder(node.leftNode, data)
        if (node.rightNode) this.dfsPostOrder(node.rightNode, data)

        data.push(node.data)
        return data
    }

    dfsInOrder(node = this.root, data = []) {
        if (node === null) return data

        if (node.leftNode) this.dfsInOrder(node.leftNode, data)
        data.push(node.data)
        if (node.rightNode) this.dfsInOrder(node.rightNode, data)
        return data
    }
}

const tree = new BST()
tree.insert(50)
tree.insert(30)
tree.insert(75)
tree.insert(60)
tree.insert(80)
tree.insert(20)
console.log(tree);
console.log(tree.includes(20));
console.log(tree.includes(50));
console.log('Breadth First Search: ', tree.bfs());
console.log('DFS Pre-Order: ', tree.dfsPreOrder());
console.log('DFS Post-Order: ', tree.dfsPostOrder());
console.log('DFS In-Order: ', tree.dfsInOrder());
