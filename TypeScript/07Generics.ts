// Generics...
function GenericSample<Type>(value: Type): Type {
    return value
}

let a = GenericSample<string>("Ajay")
console.log(a);

function Generics2<t>(value: t[]): t[] {
    return value
}
console.log(Generics2([1, 2, 3, 4, 5]));
