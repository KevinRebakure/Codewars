let test = 'AAAABBBCCDAA';
let test1 = 'xyz'

// function compressedString (s) {
//     let count = 1
//     let currentCharacter = s[0]
//     let newString = ''
//     for(let i = 1; i <= s.length; i++) {
//         if (s[i] == currentCharacter) {
//             count++
//         }  else if (s[i] != currentCharacter) {
//             newString = newString + currentCharacter + count
//             count = 1
//             currentCharacter = s[i]
//         }
//     }
//     return newString
// }

function compressedString(s){
    let arr = s.split()
    let length = arr.length
    let count = 1
    let index = 0
    // let currentCharacter = arr[0]
    for(let i = 1; i <= length; i++) {
        if (arr[i] == arr[i-1]) {
            count++
        } else if (arr[i] != arr[i-1]) {
            arr.splice(index+1, count-1, count)
            count = 1
            index = arr.indexOf(arr[i])
        }
    }
    return arr
}



console.log(compressedString(test))