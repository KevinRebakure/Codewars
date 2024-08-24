// Question: https://www.codewars.com/kata/565c4e1303a0a006d7000127/train/javascript

const numberFormat = (number) => {
    const numberString = number.toString()
    const digits = numberString.replace('-', '').split('')
    let formattedNumber = []

    for (let i = digits.length; i > 0; i -= 3) {
        formattedNumber.unshift(digits.slice(Math.max(0, i - 3), i).join(''))
    }

    return numberString[0] === '-'
        ? `-${formattedNumber.join(',')}`
        : formattedNumber.join(',')
}

console.log(numberFormat(100000))
