let i = -1;
function every5secs() {
  const timer = setTimeout(async () => {
    try {
      i++;
      const response = await thingie(
        `https://jsonplaceholder.typicode.com/users/`
      );
      const data = await response.json();
      console.log(data[i].name);
    } catch (error) {
      console.error("Sorry I found an error 😭!!!!");
    }
  }, 1000);

  if (i == 5) {
    clearInterval(timer);
  } else {
    every5secs()
  }
}

function thingie(url) {
  return fetch(url);
}

every5secs();

// let i = -1;
// function every5secs() {
//   const timer = setInterval(async () => {
//     try {
//       if (i == 5) {
//         clearInterval(timer);
//       }
//       i++;
//       const response = await thingie(
//         `https://jsonplaceholder.typicode.com/users/`
//       );
//       const data = await response.json();
//       console.log(data[i].name);
//     } catch (error) {
//       console.error("Sorry I found an error 😭!!!!");
//     }
//   }, 1000);
// }

// function thingie(url) {
//   return fetch(url);
// }

// every5secs();

// `https://jsonplaceholder.typicode.com/users/${i}`;
