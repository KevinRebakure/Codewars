// const myPromise = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve('Success!')
//     }, 1000);
// })

// myPromise.then((response)=>{console.log(response)})

const myPromise = Promise.resolve("Success!");

setTimeout(() => {
  myPromise.then((message) => {
    console.log(message);
  });
}, 1000);

// const myPromise = Promise.resolve(setTimeout(() => {
//     console.log('Kevin')
// }, 1000))

// console.log(myPromise)
