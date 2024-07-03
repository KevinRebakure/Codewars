"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumDigits = sumDigits;
function sumDigits(n) {
    const str = n
        .toString()
        .replace(/-/gi, "")
        .split("")
        .reduce((total, number) => {
        total += parseInt(number);
        return total;
    }, 0);
    return str;
}
