// Question: https://www.codewars.com/kata/56747fd5cb988479af000028/train/typescript

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s: string) {
  if (s.length % 2 !== 0) {
    return s.charAt(Math.trunc(s.length / 2));
  } else {
    return "";
  }
  // return the middle charater(s)
}

console.log(getMiddle("kevin"));
