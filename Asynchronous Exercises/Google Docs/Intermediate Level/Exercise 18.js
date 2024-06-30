// Question: Write an `async` function that fetches data
//  from two APIs sequentially using `await`.

async function doubleFetch() {
  const fetch01 = await fetch("https://jsonplaceholder.typicode.com/users");
  const fetch02 = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(fetch01);
  console.log(fetch02);
}

doubleFetch();
