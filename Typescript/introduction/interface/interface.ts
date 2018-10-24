export {}

interface Person {
    firstName: string
    lastName: string
    age: number
    isMarried: boolean
    role: string
    hobby: Array<string>
}

function greet(p: Person){
    return `Hello, im ${p.firstName} ${p.lastName}
Im ${p.age} yo , and im ${p.role} right now
My hobby is ${p.hobby}
`
}

let me = {firstName: "Fahmi irsyad" , lastName: "Khairi" , age: 18, isMarried: false, role: "Mahasiswa", hobby: ["Code","Music","Dreaming.. just dreaming"]}

console.log(greet(me))