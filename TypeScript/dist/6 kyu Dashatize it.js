"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashatize = dashatize;
function dashatize(num) {
    const getNum = num < 0 ? num * -1 : num;
    const arr = getNum
        .toString()
        .split('')
        .map((char) => parseInt(char));
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result += arr[i];
        }
        else {
            if (i === 0 && arr[i + 1] % 2 === 0) {
                result += arr[i];
                result += '-';
            }
            else if (i === 0 && arr[i + 1] % 2 !== 0) {
                result += arr[i];
            }
            else if (arr[i + 1] % 2 === 0) {
                result += '-';
                result += arr[i];
                result += '-';
            }
            else if (arr[i + 1] % 2 !== 0) {
                result += '-';
                result += arr[i];
            }
        }
    }
    return result;
}
console.log(dashatize(113));
