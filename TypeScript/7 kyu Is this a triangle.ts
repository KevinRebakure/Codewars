// Question: https://www.codewars.com/kata/56606694ec01347ce800001b/train/typescript

export function isTriangle(a: number, b: number, c: number): boolean {
    const arr = [a, b, c].sort((a, b) => a - b)
    return arr[0] + arr[1] > arr[2] ? true : false
}

// isTriangle(5, 2, 3)
