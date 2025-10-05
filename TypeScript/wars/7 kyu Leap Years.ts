// Question: https://www.codewars.com/kata/526c7363236867513f0005ca/train/typescript

function isLeap(year: number): boolean {
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else if (year % 4 === 0 || year % 400 === 0) {
    return true;
  }
  return false;
}
