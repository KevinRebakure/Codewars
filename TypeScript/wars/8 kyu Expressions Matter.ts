// Question: https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/typescript

function expressionsMatter(a: number, b: number, c: number): number {
  return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c);
}
