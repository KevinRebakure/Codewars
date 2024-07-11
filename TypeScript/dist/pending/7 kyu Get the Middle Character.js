"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMiddle = getMiddle;
function getMiddle(s) {
    if (s.length % 2 !== 0) {
        return s.charAt(Math.trunc(s.length / 2));
    }
    else {
        return '';
    }
}
console.log(getMiddle('kevin'));
