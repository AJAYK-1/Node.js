// Hash Table...

class HashTable {
    constructor(size = 5) {
        this.keyMap = new Array(size)
    }

    // Hash Function...
    hashFunction(key) {
        let sum = 0
        const PRIME_NUMBER = 31

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.toLowerCase().charCodeAt(i) - 96
            sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length
        }
        return sum
    }

    set(key, value) {
        const index = this.hashFunction(key)
        if (!this.keyMap[index]) this.keyMap[index] = []
        this.keyMap[index].push([key, value])
        return this
    }

    get(key) {
        const index = this.hashFunction(key)
        if (this.keyMap[index])
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key)
                    return this.keyMap[index][i][1]
            }
    }

    getAllKeys() {
        let keys = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys
    }

    getAllValues() {
        let values = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        return values
    }
}

let NewHash = new HashTable()

NewHash.set('Ajay', '1234567890')
NewHash.set('John', '0987654321')
NewHash.set('Arun', '1029384756')
console.log(NewHash.get('Ajay'));
console.log(NewHash.get('John'));
console.log(NewHash.getAllKeys());
console.log(NewHash.getAllValues());
