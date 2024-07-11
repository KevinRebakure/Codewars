// Question: https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/typescript

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"

// export const mergeStrings = (first: string, second: string): string => {
//     for (let i = 0; i <= first.length; i++) {
//         if (second.startsWith(first.slice(i))) {
//             return first.slice(0, i) + second
//         }
//     }
//     return first + second
// }

export const mergeStrings = (first: string, second: string): string => {
    let pos = second
        .split('')
        .findIndex((char) => char === first[first.length - 1])
    // Do your thing
    return `${first}${second.slice(pos + 1)}`
}

// console.log(mergeStrings('abaab', 'aabab'))
