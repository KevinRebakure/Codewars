// Question: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// The quick brown fox jumps over the lazy dog

function isPangram(string) {
  // generate an array of all characters
  const text = string.toLowerCase().match(/[a-z]/g);
  return [...new Set(text)].length == 26 ? true : false
}

console.log(isPangram("kevin"));
