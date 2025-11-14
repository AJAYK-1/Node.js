// Private...
class Sample {
    // 'Private' property
    private _price: number

    constructor(private name: string) {
        this._price = 10
    }

    getPrice(): string {
        return `Product: ${this.name} \nPrice: ${this._price}`
    }
}

const sample = new Sample('Pencil')
console.log(sample.getPrice());
