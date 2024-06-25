function fetchInParallel() {
  const fetch01 = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
  };
  const fetch02 = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts");
  };
  const myPromise = Promise.all([fetch01(), fetch02()]);
  return myPromise;
}

fetchInParallel().then(async (response) => {
  const res1 = await response[0].json();
  const res2 = await response[1].json();
  console.log(res1[0].name);
  console.log(res2[0].title);
});
