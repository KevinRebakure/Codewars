// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/solutions/typescript

function beeramid(bonus: number, price: number): number {
  let n = Math.trunc(bonus / price);
  let i = 1;
  let count = 0;

  while (n > 0) {
    n -= i ** 2;
    if (n >= 0) count++;
    i++;
  }
  return count;
}
