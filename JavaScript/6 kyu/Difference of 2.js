// Question: https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript

// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

const numbers = [4, 3, 1, 5, 6];

function twosDifference(input) {
  const arr = input.sort((a, b) => a - b);
  const sol = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] == 2) {
        sol.push([arr[i], arr[j]]);
      }
    }
  }
  return sol;
}

console.log(twosDifference(numbers));
