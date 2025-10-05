// Question: https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/typescript

function findNextSquare(sq: number): number {
  return !Math.sqrt(sq).toString().includes(".")
    ? (Math.sqrt(sq) + 1) ** 2
    : -1;
}

// console.log(findNextSquare(4))
