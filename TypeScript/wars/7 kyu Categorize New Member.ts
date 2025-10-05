// Question: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/typescript

function openOrSenior(data: number[][]): string[] {
  return data.map((data) => (data[0] >= 55 && data[1] > 7 ? "Senior" : "Open"));
}
