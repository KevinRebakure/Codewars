// Question: https://www.codewars.com/kata/57eaec5608fed543d6000021/train/typescript

//   assert.strictEqual(divCon([9, 3, '7', '3']), 2)
//   assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14)
//   assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13)

type valid = number | string;
function divCon(x: valid[]): number {
  const digits = x
    .filter((el: valid): el is number => typeof el === "number")
    .reduce((t: number, n: number): number => t + n, 0);
  const chars = x
    .filter((el: valid): el is string => typeof el === "string")
    .map((char): number => parseInt(char))
    .reduce((t: number, n: number): number => t + n, 0);
  return digits - chars;
}

console.log(divCon([9, 3, "7", "3"]));
