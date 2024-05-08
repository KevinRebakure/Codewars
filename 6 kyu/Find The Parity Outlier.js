// Question: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript

// const x = [2, 4, 0, 100, 4, 11, 2602, 36]; 
const x = [160, 3, 1719, 19, 11, 13, -21]; 

function findOutlier(integers) {
    let odds = integers.filter((integer)=>integer%2!=0)
    let even = integers.filter((integer)=>integer%2==0)
    return odds.length == 1 ? odds[0] : even[0]
}

console.log(findOutlier(x))