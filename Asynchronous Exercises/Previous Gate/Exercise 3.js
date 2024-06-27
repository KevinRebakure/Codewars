const performFastAsync = async (url, timer) => {
  const controller = new AbortController();
  const signal = controller.signal;

  let p = () =>
    new Promise((resolve) => {
      const timeOut = setTimeout(() => {
        resolve([]);
        controller.abort();
      }, timer);

      if (signal.aborted) {
        clearTimeout(timeOut);
      }
    });

  const pr = await Promise.race([
    fetch(url, { signal }).then((data) => console.log(data)),
    p(),
  ]);
};

performFastAsync("https://jsonplaceholder.typicode.com/todos/1", 100);
