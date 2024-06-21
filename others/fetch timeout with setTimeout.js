const url = "https://jsonplaceholder.typicode.com/photos/";
const timeout = 400;

async function fetchAPI(url) {
  const aborter = new AbortController();
  const signal = aborter.signal;

  const request = fetch(url, {
    method: "GET",
    signal: signal,
  });

  console.log(request.toString());

  setTimeout(() => {
    if (request.toString() == "[object Promise]") {
      console.log("Aborted!");
      aborter.abort();
    }
  }, timeout);

  request.then((message) => {
    console.log(message);
  });
}

fetchAPI(url, timeout);
