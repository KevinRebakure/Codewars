
const promise01 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1");
    }, 1000);
  });

const promise02 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2");
    }, 1000);
  });

const promise03 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3");
    }, 1000);
  });
async function sequantially() {
    const value1 = await promise01()
    console.log(value1)
    const value2 = await promise02()
    console.log(value2)
    const value3 = await promise03()
    console.log(value3)
}

sequantially()