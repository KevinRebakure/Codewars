// Create a function called myFetch that should work as a simple version of
// the native fetch() API. The function myFetch should use the XMLHttpRequest to
//  make a GET Request and return a promise that resolves with the request’s
//   response and rejects with an error if any.function myFetch(){ //... your code here
// }
// myFetch('https://my-random-api.com/data')
// .then(data => console.log(data))
// .catch(error => console.log('Error:', error));Bonus points (optional)
// Make your fetch function perform other request methods like POST or receive request options.

function myFetch() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const data = JSON.stringify({
      customer: "Kevin Rebakure",
      age: 19,
      occupation: "Developer",
    });
    // console.log(xhr);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 201) {
        // console.log(xhr);
        resolve(JSON.parse(this.response));
      } else if (this.readyState == 4 && this.status != 201) {
        // console.log(xhr);
        reject("Some Error happened somewhere!");
      }
    };
    xhr.open("POST", "https://jsonplaceholder.typicode.com/photos/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
  });
}

myFetch()
  .then((message) => {
    console.log(`The URL of the image is: ${message}`);
    console.log(message);
  })
  .catch((err) => {
    console.error(err);
  });
