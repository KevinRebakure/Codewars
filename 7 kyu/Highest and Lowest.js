// Question: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
function highAndLow(numbers) {
  const arr = numbers.split(' ').map((num)=>parseInt(num))
  return `${Math.max(...arr)} ${Math.min(...arr)}`
}

// console.log(highAndLow('1 2 3 4 5'))