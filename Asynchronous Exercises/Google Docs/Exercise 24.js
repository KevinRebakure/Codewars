// Question:  Write a function that uses `Promise.race` to handle the fastest resolving Promise
// from an array of Promises.

async function fastest() {
  const promise = await Promise.race([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("First 100ms");
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Second 500ms");
      }, 500);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Third 300ms");
      }, 300);
    }),
  ]);

  return promise;
}

fastest().then((res) => console.log(res));
