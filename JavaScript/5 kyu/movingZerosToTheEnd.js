// Question: https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript

// let x = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
function moveZeros(arr) {
  return [...arr.filter((num) => num !== 0), ...arr.filter((num) => num === 0)];
}

// console.log(moveZeros(x))
