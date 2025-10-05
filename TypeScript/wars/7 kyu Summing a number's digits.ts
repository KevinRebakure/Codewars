// Question: https://www.codewars.com/kata/52f3149496de55aded000410/train/typescript

function sumDigits(n: number): number {
  const str = n
    .toString()
    .replace(/-/gi, "")
    .split("")
    .reduce((total: number, number: string): number => {
      total += parseInt(number);
      return total;
    }, 0);

  return str;
}
