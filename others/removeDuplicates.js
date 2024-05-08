// Question: Remove a occurances of the element in the array and only remain with one single element

const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 1, 1, 1, 6, 5];
let state = numbers.length

for(let i = 1; i <= state; i++) {
    if (numbers.slice(0, i).includes(numbers[i])) {
        numbers.splice(i, 1)
        state = numbers.length
        i--
    }
}

console.log(numbers);

// function removeDuplicate(arr) {
//     const newArr = []
//     arr.forEach((value)=>{
//         if (!newArr.includes(value)) {
//             newArr.push(value)
//         }
//     })
//     return newArr
// }

// console.log(removeDuplicate(numbers));
