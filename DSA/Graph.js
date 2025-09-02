// Graph...

class Graph {
    constructor() {
        this.adjusencyList = {}
    }

    addVertex(vtx) {
        if (!this.adjusencyList[vtx]) {
            this.adjusencyList[vtx] = []
            return true
        }
        return false
    }

    addEdge(vtx1, vtx2) {
        if (this.adjusencyList[vtx1] && this.adjusencyList[vtx2]) {
            this.adjusencyList[vtx1].push(vtx2)
            this.adjusencyList[vtx2].push(vtx1)
            return true
        }
        return false
    }

    removeEdge(vtx1, vtx2) {
        if (this.adjusencyList[vtx1] && this.adjusencyList[vtx2]) {
            this.adjusencyList[vtx1] = this.adjusencyList[vtx1].filter(v => v !== vtx2)
            this.adjusencyList[vtx2] = this.adjusencyList[vtx2].filter(v => v !== vtx1)
            return true
        }
        return false
    }

    removeVertex(vtx) {
        if (!this.adjusencyList[vtx]) return undefined

        for (let neighbor of this.adjusencyList[vtx]) {
            this.adjusencyList[neighbor] = this.adjusencyList[neighbor].filter(v => v !== vtx)
        }
        delete this.adjusencyList[vtx]
    }
}

const MyGraph = new Graph()
MyGraph.addVertex('A')
MyGraph.addVertex('B')
MyGraph.addVertex('C')
MyGraph.addEdge('A', 'B')
MyGraph.addEdge('A', 'C')
MyGraph.addEdge('B', 'C')
console.log(MyGraph);
MyGraph.removeEdge('A', 'C')
console.log(MyGraph);
MyGraph.removeVertex('A')
console.log(MyGraph);
