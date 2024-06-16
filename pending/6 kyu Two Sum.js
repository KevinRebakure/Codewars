// Question: https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (
      numbers[i] +
        numbers.slice(i, numbers.length).find((n) => numbers[i] + n == target) ==
      target
    ) {
      return [
        numbers[i],
        numbers[(i, numbers.length)].find((n) => numbers[i] + n == target),
      ];
    }
  }
}

console.log(twoSum([1, 2, 3], 4));