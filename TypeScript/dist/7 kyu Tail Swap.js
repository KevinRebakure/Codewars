"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tailSwap = tailSwap;
function tailSwap(arr) {
    let a = arr[0].split(':')[0];
    let b = arr[0].split(':')[1];
    let c = arr[1].split(':')[0];
    let d = arr[1].split(':')[1];
    return [`${a}:${d}`, `${c}:${b}`];
}
console.log(tailSwap(['abc:123', 'cde:456']));
