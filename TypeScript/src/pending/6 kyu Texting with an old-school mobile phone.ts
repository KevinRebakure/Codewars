// https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/typescript

export function sendMessage(message: string): string {
    // const keysArr = new Map<number | string, string>([
    //     [1, '.,?!'],
    //     [2, 'abc'],
    //     [3, 'def'],
    //     [4, 'ghi'],
    //     [5, 'jkl'],
    //     [6, 'mno'],
    //     [7, 'pqrs'],
    //     [8, 'tuv'],
    //     [9, 'wxyz'],
    //     ['*', '-+='],
    //     [0, 'space'],
    //     ['#', 'case'],
    // ])

    message.split('').forEach((char)=>{
        console.log(char)
    })

    return message
}

sendMessage('kevin')