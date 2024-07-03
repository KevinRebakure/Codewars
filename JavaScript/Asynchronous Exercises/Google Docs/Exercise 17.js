// Question: Create a retry mechanism for an asynchronous function that
// retries up to 3 times before failing.

let count = 0;
async function trials() {
  const data = await fetch("https://jsonplaceholder.typicode.com/usersa");
  if (data.statusText != "OK" && count != 3) {
    count++;
    console.log(`Trial: ${count}`);
    trials();
  } else if (data.statusText == "OK") {
    console.log("done");
  }
}

trials();
