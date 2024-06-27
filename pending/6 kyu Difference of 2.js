// Question: https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript

// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]

// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

// [1, 23, 3, 4, 7] should return [[1, 3]]

// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

const numbers = [
  8, 60, 96, 3, 62, 10, 82, 49, 66, 83, 94, 81, 77, 89, 95, 6, 11, 38, 68, 67,
  86, 44, 57, 51, 90, 87, 58, 21, 85, 72, 76, 14, 52, 15, 30, 42, 23, 37, 5, 88,
  84, 39, 64, 1, 70, 25, 63, 71, 54,
];

function twosDifference(input) {
  const newarr = input.reduce((sol, num, i, arr) => {
    let a = arr.slice(i + 1).find((n) => {
      if (n - num === 2 || n - num === -2) {
        return n;
      }
    });

    let b = arr.slice(0, i + 1).find((n) => {
      if (n - num === 2 || n - num === -2) {
        return n;
      }
    });

    if (a != null) {
      sol.push([num, a].sort((a, b) => a - b));
    }
    if (b != null) {
      sol.push([num, b].sort((a, b) => a - b));
    }

    return [
      ...new Set(
        sol.sort((a, b) => a[0] - b[0]).map((el) => JSON.stringify(el))
      ),
    ].map((el) => JSON.parse(el));
  }, []);
  return newarr;
}

console.log(twosDifference(numbers));
