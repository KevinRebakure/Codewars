// Question: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// The quick brown fox jumps over the lazy dog

function isPangram(string) {
  const text = string.toLowerCase().match(/[a-z]/g);
  //   return [...new Set(text)].length == 26 ? true : false
  const alphabets = [];
  for (let i = 97; i <= 122; i++) {
    alphabets.push(String.fromCharCode(i));
  }
  return alphabets.every((char)=>text.includes(char))
}

// console.log(isPangram("The quick brown fox jumps over the lazy do"));
