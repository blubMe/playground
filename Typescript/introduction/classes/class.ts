export {}
// classical class constuction
class Worker {
    workerName: string

    constructor(name: string){
        this.workerName = name
    }
    greet(){
        console.log(`Good morning ${this.workerName}`)
    }
}

let worker1 = new Worker('Fahmi')
worker1.greet()

// even more combination with interface and public
interface Person {
    firstName: string
    lastName: string
}

class WorkerFull {
    fullName: string
    constructor(public firstName: string,public lastName: string){
        this.fullName = `${firstName} ${lastName}`
    }
    greet(){
        console.log(`Hello, ${this.firstName} ${this.lastName} from inner`)
    }
}

function greeter(p: Person){
    return console.log(`Hello, ${p.firstName} ${p.lastName}`)
}

let user1 = new WorkerFull('fahmi irsyad','Khairi')
// use method from classes
// no interface , just use from inner
user1.greet()
// call from function and connected with intefaces
greeter(user1)

// extends
class Manager extends WorkerFull {
    constructor(managerFirstName: string, managerLastName: string){
        super(managerFirstName, managerLastName)
    }
    greetManager(){
        console.log(`Manager show up`)
    }
}

let manager1 = new Manager('Fahmi irsyad','Khairi')
manager1.greetManager()
manager1.greet()
console.log(manager1.fullName)



