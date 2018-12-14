class IncreasingCounter {
    constructor() {
        this.state = {
            count: 0
        }
    }
    get value() {
        return this.state.count
    }
    increment() {
        const nextState = this.state.count + 1
        return this.result(nextState)
    }
    decrement() {
        const nextState = this.state.count - 1
        return this.result(nextState)
    }
    reset(){
        const nextState = 0
        return this.result(nextState)
    }
    result(res){
        const newObj = {
            count: res
        }
        this.state = newObj
    }
}
const counter = new IncreasingCounter();
const Init = () => {
    const count = counter.value
    document.getElementById('target').innerHTML = count
    count === 0 ? disableBtn(true) :
        disableBtn(false)
}
const disableBtn = state => document.getElementById('btnDec').disabled = state
const Inc = () => counter.increment() & Init()
const Dec = () => counter.decrement() & Init()
const Reset = () => counter.reset() & Init()