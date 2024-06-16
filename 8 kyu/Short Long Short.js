// Question: https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

function solution(a, b) {
  return `${a.length < b.length ? a : b}${a.length > b.length ? a : b}${
    a.length < b.length ? a : b
  }`;
}

// console.log(solution("1", "22"));


// Better 

function solution1(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}