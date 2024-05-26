/*
const originalObj = {aa: "1", bf: "3", cq: "5"};
const reversedObj = reverseObject(originalObj);
// console.log(reversedObj); 
output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output
*/

const originalObj = { aa: "1", bf: "3", cq: "5" };

function reversedObject(obj) {
  return Object.fromEntries(Object.entries(obj).map((arr) => arr.reverse()));
}

console.log(reversedObject(originalObj));