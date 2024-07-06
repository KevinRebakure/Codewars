"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNegative = void 0;
const makeNegative = (num) => {
    if (num <= 0) {
        return num;
    }
    else {
        return num * -1;
    }
};
exports.makeNegative = makeNegative;
