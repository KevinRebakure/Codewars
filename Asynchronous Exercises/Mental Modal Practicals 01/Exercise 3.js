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
    console.log(xhr);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(this.responseText));
      } else if (this.readyState == 4 && this.status != 200) {
        reject("Some Error happened somewhere!");
      }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos/3");
    xhr.send();
  });
}

myFetch()
  .then((message) => {
    console.log(`The URL of the image is: ${message.url}`);
  })
  .catch((err) => {
    console.error(err);
  });
