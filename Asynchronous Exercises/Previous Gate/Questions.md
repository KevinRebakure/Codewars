# Round one interview questions

## Theoretical questions

1. Explain the concept of concurrency in JavaScript and how it relates to asynchronous programming and the event loop.

2. Explain the concept of callback hell and how it can be mitigated.

3. Why should I use Promise.any() over Promise.race()

4. What is the difference between Micro tasks and Callback Queue in the context of the event loop?

5. Explain how error handling works in asynchronous JavaScript code, especially when dealing with Promises and async/await

## Practical questions

1. Implement a function called repeatEvery() that takes another function and a time interval (in milliseconds) as arguments. This function should execute the given function repeatedly at the specified time interval until manually stopped.

2. Use the async/await syntax to fetch vehicle manufacturers’ data from the given API endpoint. After fetching, filter the results and log to the console only manufacturers whose Country is equal to "UNITED STATES (USA)"

The API endpoint you should use is: https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2

3. Implement a function performFastAsync() that sends a GET request to a specified API endpoint, simultaneously initiates a timer with a given delay, and cancels either the request or timer based on which one finishes first.

The function will accept two parameters: the URL of the API endpoint to send a request to and the number of seconds (in milliseconds) to delay the timer.

The desired behavior involves two possible outcomes:

- If the request successfully completes before the timer runs out, the function should cancel the timer and return a promise that resolves with the data obtained from the request.

- if the timer expires before the request finishes, the function should cancel the ongoing request and return a promise that resolves with an empty array.
  // performFastAsync code here ...

````performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 9000)
.then((data) => {
	console.log(data)
})```

```performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 10)
.then((data) => {
	console.log(data)
})```
````
