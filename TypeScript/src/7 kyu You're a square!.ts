// Question: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/typescript

export default function isSquare(n: number): boolean {
    return Math.trunc(Math.sqrt(n)) ** 2 === n ? true : false
}

// console.log(isSquare(16))
