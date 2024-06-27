async function resolveAll() {
    const promise = await Promise.all([
        new Promise((resolve)=>{setTimeout(() => {
            resolve('First 100ms')
        }, 100);}),
        new Promise((resolve)=>{setTimeout(() => {
            resolve('Second 500ms')
        }, 500);}),
        new Promise((resolve)=>{setTimeout(() => {
            resolve('Third 300ms')
        }, 300);}),
    ])

    return promise
}

resolveAll().then((res)=>console.log(res))