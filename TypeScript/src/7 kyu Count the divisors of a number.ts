// Question: https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/typescript

// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

export function divisors(n: number) {
    let count = 0
    for(let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++
        }
    }
    return count
}

console.log(divisors(4))
