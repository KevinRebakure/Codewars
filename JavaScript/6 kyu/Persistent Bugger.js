// Question: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let count = 0
    let x = num
    while (x.toString().length > 1) {
        x = x.toString().split('').reduce((t, v)=> v*t, 1)
        count++
    }
    return count
}

// console.log(persistence(4));