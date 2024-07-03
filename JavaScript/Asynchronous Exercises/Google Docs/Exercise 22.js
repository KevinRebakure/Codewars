// Question: Write an `async` function that uses `try`/`catch` to handle errors
// from multiple `await` calls.

async function multipleCalls() {
  try {
    const promise01 = await fetch("https://jsonplaceholder.typicode.com/use");
    if (promise01.ok === false) {
      throw new Error("Page not found😞");
    }
    console.log(promise01);
    const promise02 = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(promise02);
    const promise03 = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(promise03);
  } catch (error) {
    console.error(error);
  }
}

multipleCalls();
