// sample array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function oddSquares(arr) {
    let oddNumbers = arr.filter((value)=>{return value % 2 != 0})
    let oddSquares = oddNumbers.map((value)=>{return value ** 2})
    return oddSquares
}

console.log(oddSquares(numbers))
