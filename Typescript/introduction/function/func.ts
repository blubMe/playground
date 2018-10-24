export {}

function gretting(person: string){
    return `Hello, ${person}`
}

let user = "My name is fahmi";

// implementation ES6
const arr = (arry: Array<string>) => `List array: ${arry}`
let listarr = ["aku","dia","kita","mereka"]

console.log(`${gretting(user)}
${arr(listarr)}`);

