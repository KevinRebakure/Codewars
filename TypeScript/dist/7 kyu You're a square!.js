"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isSquare;
function isSquare(n) {
    return Math.trunc(Math.sqrt(n)) ** 2 === n ? true : false;
}
