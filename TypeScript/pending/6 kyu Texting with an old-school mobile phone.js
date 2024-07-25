"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = sendMessage;
function sendMessage(message) {
    const keysArr = new Map([
        [1, '.,?!'],
        [2, 'abc'],
        [3, 'def'],
        [4, 'ghi'],
        [5, 'jkl'],
        [6, 'mno'],
        [7, 'pqrs'],
        [8, 'tuv'],
        [9, 'wxyz'],
        ['*', '-+='],
        [0, 'space'],
        ['#', 'case'],
    ]);
    message.split('').forEach((char) => {
        console.log(char);
    });
    return message;
}
sendMessage('kevin');
