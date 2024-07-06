"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(str) {
    const arr = str.split("");
    return arr.reverse().join("");
}
console.log(solution('kevin'));
