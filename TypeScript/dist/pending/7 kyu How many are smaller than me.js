"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smaller = smaller;
function smaller(nums) {
    const small = nums.map((num, i) => {
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < num) {
                count++;
            }
        }
        return count;
    });
    return small;
}
console.log(smaller([5, 4, 3, 2, 1]));
