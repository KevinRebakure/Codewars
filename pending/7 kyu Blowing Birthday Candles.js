// Question: https://www.codewars.com/kata/6630da20f925eb3007c5a498/train/javascript


// Input: "1321"

// This should return 3.

// Input: "0323456"

// This should return 9.

let input = "0323456";
function blowCandles(str) {
  let count = 0
  for(let i = 0; i < str.length; i+=3) {
    let arr = str.split('').slice(i, i+3)
    console.log(arr)
  }
  // return count
}

console.log(blowCandles(input))