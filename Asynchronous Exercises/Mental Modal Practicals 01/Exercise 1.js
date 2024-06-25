// Write a JavaScript function that fetches data from multiple APIs
// concurrently and returns a combined result using Promises

const apiUrls = [
  'https://jsonplaceholder.typicode.com/photos/1',
  'https://jsonplaceholder.typicode.com/photos/2',
  'https://jsonplaceholder.typicode.com/photos/3'
];

async function fetchData() {
  const response01 = fetch(apiUrls[0]);
  const response02 = fetch(apiUrls[1]);
  const response03 = fetch(apiUrls[2]);
  const RESPONSE = await Promise.all([response01, response02, response03]);
  const DATA = []
  for(const res of RESPONSE) {
    DATA.push(await res.json())
  }
  for(const url of DATA) {
    console.log(url.url)
  }
}

fetchData()