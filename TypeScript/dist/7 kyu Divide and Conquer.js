"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divCon = divCon;
function divCon(x) {
    const digits = x
        .filter((el) => typeof el === 'number')
        .reduce((t, n) => t + n, 0);
    const chars = x
        .filter((el) => typeof el === 'string')
        .map((char) => parseInt(char))
        .reduce((t, n) => t + n, 0);
    return digits - chars;
}
console.log(divCon([9, 3, '7', '3']));
