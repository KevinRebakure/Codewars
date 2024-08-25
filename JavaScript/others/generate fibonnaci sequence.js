const generateFibannaciSequence = (length) => {
    if (length < 3) return 'The length must be atleast 3!'

    const fibonnaciSequence = [0, 1]

    for (let i = 1; i < length - 1; i++) {
        const next = fibonnaciSequence[i] + fibonnaciSequence[i - 1]
        fibonnaciSequence.push(next)
    }

    return fibonnaciSequence.join(',')
}

console.log(generateFibannaciSequence(10))
