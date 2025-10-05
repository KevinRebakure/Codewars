// Question; https://www.codewars.com/kata/5868812b15f0057e05000001/train/typescript

// ['abc:123', 'cde:456']-- >['abc:456', 'cde:123']
// ['a:12345', '777:xyz']-- >['a:xyz', '777:12345']

export function tailSwap(arr: [string, string]): [string, string] {
    // your code here
    let a = arr[0].split(':')[0]
    let b = arr[0].split(':')[1]
    let c = arr[1].split(':')[0]
    let d = arr[1].split(':')[1]
    return [`${a}:${d}`, `${c}:${b}`]
}

console.log(tailSwap(['abc:123', 'cde:456']))
