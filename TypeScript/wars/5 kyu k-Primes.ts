// The commented code is my code but down below is the code I got from deepseek just to pass all tests.
// I couldn't optimize my code very well.

// // export const countKprimes = (
// //     k: number,
// //     start: number,
// //     nd: number
// // ): number[] => {
// //     // you code
// //     return [];
// // };
// // export const puzzle = (s: number): number => {
// //     // you code
// //     return -1;
// // };

// /*
// k = 2  -->  4, 6, 9, 10, 14, 15, 21, 22, ...
// k = 3  -->  8, 12, 18, 20, 27, 28, 30, ...
// k = 5  -->  32, 48, 72, 80, 108, 112, ...
// */

// interface PrimeFactors {
//     number: number;
//     factors: number[];
// }

// export const countKprimes = (
//     k: number,
//     start: number,
//     nd: number
// ): number[] => {
//     const range = [];

//     for (let i = start; i <= nd; i++) {
//         range.push(i);
//     }

//     const divisors: PrimeFactors[] = [];

//     for (let number of range) {
//         let n = 2;
//         let result: PrimeFactors = {
//             number,
//             factors: [],
//         };

//         while (number > 1) {
//             while (number % n === 0) {
//                 result.factors.push(n);
//                 number /= n;
//             }
//             n++;
//         }

//         divisors.push(result);
//     }

//     const final = divisors
//         .filter((divisor) => {
//             return divisor.factors.length === k;
//         })
//         .map((divisor) => divisor.number);

//     return final;
// };

// console.log(countKprimes(2, 1, 100));

// export const puzzle = (s: number): number => {
//     // you code
//     return s;
// };

// interface PrimeFactors {
//     number: number;
//     factors: number[];
// }

// Helper function to count prime factors of a number
const countPrimeFactors = (num: number): number => {
    let count = 0;
    let n = 2;

    while (n * n <= num) {
        while (num % n === 0) {
            count++;
            num /= n;
        }
        n++;
    }

    if (num > 1) {
        count++;
    }

    return count;
};

export const countKprimes = (
    k: number,
    start: number,
    nd: number
): number[] => {
    const result: number[] = [];

    for (let i = start; i <= nd; i++) {
        if (countPrimeFactors(i) === k) {
            result.push(i);
        }
    }

    return result;
};

console.log(countKprimes(2, 1, 100));

export const puzzle = (s: number): number => {
    // Find all 1-primes, 3-primes, and 7-primes up to s
    const onePrimes = countKprimes(1, 2, s);
    const threePrimes = countKprimes(3, 2, s);
    const sevenPrimes = countKprimes(7, 2, s);

    let count = 0;

    // Check all combinations of onePrimes, threePrimes, and sevenPrimes that sum to s
    for (const a of onePrimes) {
        for (const b of threePrimes) {
            for (const c of sevenPrimes) {
                if (a + b + c === s) {
                    count++;
                }
            }
        }
    }

    return count;
};

// Test the puzzle function
console.log(puzzle(666)); // Expected output: 64
