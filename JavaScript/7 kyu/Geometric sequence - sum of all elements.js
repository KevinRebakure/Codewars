// Question: https://www.codewars.com/kata/55cb000321ca31039e00007d/train/javascript

function GeometricSequenceSum(a, r, n) {
  let current = a;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(current);
    current = current * r;
  }
  return arr.reduce((sum, num) => sum + num);
}

// console.log(GeometricSequenceSum(2, 3, 5));
