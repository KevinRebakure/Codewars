// Question: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// The quick brown fox jumps over the lazy dog

function isPangram(string) {
  // generate an array of all characters
  const text = string.toLowerCase().match(/[a-z]/g);
  const alphabets = [];
  for (let index = 97; index <= 122; index++) {
    alphabets.push(String.fromCharCode(index));
  }
  // frequency of occurances
  const data = Object.fromEntries([
    ...alphabets.map((char) => [char.toLowerCase(), 0]),
  ]);
  alphabets.forEach((char) => {
    let count = 0;
    for (let s of text) {
      if (s == char) {
        count++;
      }
    }
    data[char] = count;
  });
  //   final test
  if ([...Object.values(data)].includes(0)) {
    return false;
  } else {
    return true;
  }
  // return text
}

console.log(isPangram("Pack my box with five dozen liquor jugs."));
