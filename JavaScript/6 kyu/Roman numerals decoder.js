// Question: https://www.codewars.com/kata/51b6249c4612257ac0000005/solutions/javascript

const solution = (roman) => {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    return roman.split('').reduce((acc, number, index, numbers) => {
        const currentNumber = values[number]
        const nextNumber = values[numbers[index + 1]] || 0
        return nextNumber > currentNumber
            ? acc - currentNumber
            : acc + currentNumber
    }, 0)
}

console.log(solution('MCMXCIX'))
