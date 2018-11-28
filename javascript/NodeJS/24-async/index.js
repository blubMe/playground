getData3('async')
console.log('2 sync')
console.log('4 sync')

function getData3(arg){
    setTimeout(() => {
        console.log('1 ' + arg)
        setTimeout(() => {
            console.log('3 '+ arg)
        },3000)
    },2000)
}