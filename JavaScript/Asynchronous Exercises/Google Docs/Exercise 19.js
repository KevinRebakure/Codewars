// Question: 9. Implement a simple timeout wrapper for a Promise that rejects if
// the Promise does not resolve within a specified time

async function race() {
  try {
    const promise = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(fetch("https://jsonplaceholder.typicode.com/users"));
        }, 0);

        setTimeout(() => {
          reject("Reject❌");
        }, 0);
      });
    };

    const data = await promise();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

race();
