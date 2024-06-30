function fetchInParallel() {
  const myPromise = Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
  ]);
  return myPromise;
}

fetchInParallel().then(async (response) => {
  const res1 = await response[0].json();
  const res2 = await response[1].json();
  console.log(res1[0].name);
  console.log(res2[0].title);
});
