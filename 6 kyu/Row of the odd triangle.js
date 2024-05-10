//  Question: https://www.codewars.com/kata/5d5a7525207a674b71aa25b5/javascript

function oddRow(n) {
  let startingNumber = n * n - (n - 1);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(startingNumber);
    startingNumber = startingNumber + 2;
  }
  return arr;
}

// for (let i = 0; i < 5; i++) {
//   console.log(oddRow(i + 1));
// }
