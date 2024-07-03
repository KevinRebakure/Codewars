// Question: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
    const words = x.split(' ')
    const highest = []
    let count = 0
    words.forEach((word)=>{
        for (let char of word) {
            count += char.charCodeAt(0)-96
        }
        highest.push(count)
        count = 0
    })
    return words[highest.indexOf(Math.max(...highest))];
}

console.log(high('aa bb'))
