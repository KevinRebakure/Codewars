const myPromise = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Error!");
  }, 2000);
});

myPromise.catch((err) => {
  console.log(err);
});