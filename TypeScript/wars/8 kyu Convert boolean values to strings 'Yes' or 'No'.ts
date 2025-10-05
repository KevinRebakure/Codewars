// Question: https://www.codewars.com/kata/53369039d7ab3ac506000467/train/typescript

export const boolToWord = (bool: boolean): string => {
    return bool === true ? 'Yes' : 'No'
}

boolToWord(true)
