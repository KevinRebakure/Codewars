// Question: https://www.codewars.com/kata/58223370aef9fc03fd000071/train/typescript

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

export function dashatize(num: number): string {
    const getNum = num < 0 ? num * -1 : num
    const arr = getNum
        .toString()
        .split('')
        .map((char) => parseInt(char))
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result += arr[i]
        } else {
            if (i === 0 && arr[i + 1] % 2 === 0) {
                result += arr[i]
                result += '-'
            } else if (i === 0 && arr[i + 1] % 2 !== 0) {
                result += arr[i]
            } else if (arr[i + 1] % 2 === 0) {
                result += '-'
                result += arr[i]
                result += '-'
            } else if (arr[i + 1] % 2 !== 0) {
                result += '-'
                result += arr[i]
            }
        }
    }
    return result
}

console.log(dashatize(113))

// favorite codewars solution from other people. Brilliant😎

// export const dashatize = (num: number) => {
//     return num
//         .toString()
//         .replace(/([13579])/g, '-$1-')
//         .replace(/\-+/g, '-')
//         .replace(/^\-/, '')
//         .replace(/\-$/, '')
// }
