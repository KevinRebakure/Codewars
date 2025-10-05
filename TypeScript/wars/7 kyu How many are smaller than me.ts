// Question: https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/typescript

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]

export function smaller(nums: number[]): number[] {
    const small: number[] = nums.map((num: number, i: number): number => {
        let count = 0
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < num) {
                count++
            }
        }
        return count
    })
    return small
}
// export function smaller(nums: number[]): number[] {
//   const small: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] < nums[i]) {
//         count++;
//       }
//     }
//     small.push(count);
//   }
//   return small;
// }

console.log(smaller([5, 4, 3, 2, 1]))
