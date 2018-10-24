export {}

function gretting(person: string): string {
    return `Hello, ${person}`
}

let user = "My name is fahmi";

// implementation ES6
const arr = (arry: Array<string>): string => `List array: ${arry}`
let listarr = ["aku","dia","kita","mereka"]

console.log(`${gretting(user)}
${arr(listarr)}`);


// optional params
const arrOpt = (obj1: string, obj2?: string) : string => {
    const res = obj2 ? `${obj1} & ${obj2}` : obj1
    return res;
}
const a = "Aku harus masuk"
const b = "Aku optional"

console.log(arrOpt(a,b))
console.log(arrOpt(a))