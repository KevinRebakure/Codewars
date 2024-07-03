"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smaller = smaller;
function smaller(nums) {
    return nums.map((num, i, arr) => {
        let count = 0;
        for (let j = 1; j <= arr.slice(i).length; j++) {
            if (arr[j] < num) {
                count++;
            }
        }
        return count;
    });
}
console.log(smaller([5, 4, 3, 2, 1]));
