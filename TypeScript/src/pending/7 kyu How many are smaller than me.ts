// Question: https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/typescript

export function smaller(nums: number[]): number[] {
  return nums.map((num: number, i: number, arr: number[]): number => {
    let count: number = 0;
    for (let j: number = 1; j <= arr.slice(i).length; j++) {
      if (arr[j] < num) {
        count++;
      }
    }
    return count;
  });
}

console.log(smaller([5, 4, 3, 2, 1]));
