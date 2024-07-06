"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShape = generateShape;
function generateShape(int) {
    let square = [];
    for (let i = 0; i < int; i++) {
        square.push("+".repeat(int));
    }
    return square.join("\n");
}
console.log(generateShape(5));
