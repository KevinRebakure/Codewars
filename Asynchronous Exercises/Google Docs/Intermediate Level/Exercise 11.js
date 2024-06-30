const promise01 = Promise.resolve('Promise 1')
const promise02 = Promise.resolve('Promise 2')
function chain() {
    promise01.then((message)=>{
        console.log(message)
        return message
    }).then((message)=>{
        console.log(message)
    })
}

chain()