const quickResolve = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data fetched!");
  }, 1000);
});

quickResolve.then((message) => console.log(message));
