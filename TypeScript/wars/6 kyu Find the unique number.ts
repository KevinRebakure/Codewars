// Question: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/typescript

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

export function findUniq(arr: number[]): number {
    const singles = [...new Set(arr)]
    const data = Object.fromEntries(
        singles.map((single) => {
            let count = 0
            arr.forEach((number) => {
                number === single && count++
            })
            return [single, count]
        })
    )
    console.log(data)

    // let answer: number

    for (const [key, value] of Object.entries(data)) {
        if (value === 1) {
            return parseFloat(key)
        }
    }

    // Do the magic
    // return answer
    throw new Error('No unique number found') 
}

console.log(findUniq([1, 1, 1, 2, 1, 1]))
