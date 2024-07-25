"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeStrings = void 0;
const mergeStrings = (first, second) => {
    let pos = second
        .split('')
        .findIndex((char) => char === first[first.length - 1]);
    return `${first}${second.slice(pos + 1)}`;
};
exports.mergeStrings = mergeStrings;
