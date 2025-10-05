// Question: https://www.codewars.com/kata/5637ead70013386e30000027/train/typescript

export function* generator(a: number): Generator<string> {
    let b = 1
    while (true) {
        yield `${a} x ${b} = ${a*b}`
        b++
    }
}

// const gen = generator(2)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)