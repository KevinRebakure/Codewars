/*
Create a function that performs a deep comparison between two 
arrays of objects, checking for equality of nested properties.
*/


// const array1 = [
//   { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//   { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } },
// ];

// const array2 = [
//   { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//   { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } },
// ];


const array1 = [
  { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
  { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } },
];

const array2 = [
  { id: 3, name: "Alice ", details: { age: 30, city: "New York" } },
  { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } },
];

function deepCompare (arr1, arr2) {
    return JSON.stringify(arr1) == JSON.stringify(arr2)
}

console.log(deepCompare(array1, array2))