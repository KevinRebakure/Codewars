// https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/typescript

// 'hey', '4433999'

export function sendMessage(message: string): string {
    const keysArr = new Map([
        ['1', '.,?!'],
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz'],
        ['*', '-+='],
        ['0', ''],
        ['#', ''],
    ])

    // const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    // const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // let lower = true

    message.split('').forEach((char, i) => {
        if (char === ' ') {
            console.log('space')
        } else {
            for (const [key, value] of keysArr.entries()) {
                if (char !== key) {
                    if (value.includes(char)) {
                        const index = value.indexOf(char) + 1
                        console.log(key.toString().repeat(index))
                    }
                } else if (char === key) {
                    console.log(`${char}-`)
                } else if (i !== 0 && char === message[i + 1]) {
                    console.log('wait')
                }
            }
        }
    })

    return message
}

sendMessage('555')
