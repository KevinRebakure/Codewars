// Question: Write a function that handles multiple asynchronous operations,
// ensuring they complete in a specific order using Promises.

async function multiplePromises() {
  const promise01 = Promise.resolve(1);
  const promise02 = new Promise((resolve) => setTimeout(resolve, 10, 2));
  const promise03 = Promise.resolve(10);
  const promise = await Promise.allSettled([promise01, promise02, promise03]);
  console.log(promise);
}

multiplePromises();
