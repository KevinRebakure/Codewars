// Question: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// I used weird relative references. Bad practice💩.!! But I was just messing around. 
function findOdd(arr) {
    // get individual numbers
    const numbers = [...new Set(arr)]
    // count the number of occurances. Keep their indexes relative to individual numbers in numbers array
    const occurances = numbers.map((number)=>{
        let count = 0
        for (let a of arr) {
            if(a == number) count++
        }
        return count
    })
    // get the first odd number from the occurances array
    const x = occurances.find((n)=>{
        if (n % 2 != 0) {
            return n
        }
    })
    // return the number at the index of x's index in the occurances array. Since they are relative
    return numbers[occurances.indexOf(x)]
}
mm
// console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))