const url = "https://jsonplaceholder.typicode.com/photos/";
const timeout = 400;

async function fetchAPI() {
  const aborter = new AbortController();
  const signal = aborter.signal;

  const request = fetch(url, {
    method: "GET",
    signal: signal,
  });

  console.log(request);

  let time = 0;
  const interval = setInterval(() => {
    time++;
    console.log(time);
    if (request.toString() == "[object Promise]" && time > timeout) {
      aborter.abort();
      clearInterval(interval);
      // throw new Error("Timeout!⌛");
    } else {
      request.then((message) => {
        console.log(message);
        clearInterval(interval);
      });
    }
  }, 1);
}

fetchAPI();
