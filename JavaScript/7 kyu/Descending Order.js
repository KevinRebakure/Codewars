// Question: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .map((n) => parseInt(n))
      .sort((a, b) => a - b)
      .reverse()
      .join("")
  );
}

// console.log(descendingOrder(42145));
