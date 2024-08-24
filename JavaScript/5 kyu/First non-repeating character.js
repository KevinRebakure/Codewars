// Question: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

// stress
// sTreSS
// ''

function firstNonRepeatingLetter(s) {
    const stringArr = [...s]
    const data = mapping(stringArr)
    const singleChar = []

    for (const [key, value] of [...data.entries()]) {
        if (value == 1) {
            singleChar.push(key)
        }
    }

    // all repeating
    const test = [...data.values()]

    if (test.find((val) => val === 1) === undefined) {
        return ''
    } else {
        return singleChar[0]
    }
}

function mapping(stringArr) {
    const counts = new Map(
        [...new Set(stringArr)].map((char01) => {
            return [
                char01,
                stringArr.reduce((acc, char02) => {
                    if (char01 === char02) {
                        return acc + 1
                    }
                    return acc + 0
                }, 0),
            ]
        })
    )

    return counts
}

console.log(firstNonRepeatingLetter('sTreSS'))
