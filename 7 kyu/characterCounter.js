// Question: https://www.codewars.com/kata/56786a687e9a88d1cf00005d

// STEPS

// 1. Check which characters are in the string (Works either sorted or not sorted)
// 2. Check how many times each single character occure in a string
// 3. Check if the number of frequencies are the same

function validateWord(s) {
  // split the string to a word
  let sArray = s.toLowerCase().split("");
  // Check which characters are in a string
  let charactersInTheString = [];
  // Check how many times each character appear in a string
  let occurances = [];
  // The final value we'll return 
  // Unpredictable here
  let test = true;

  // Update "charactersInTheString" array
  sArray.forEach((character) => {
    if (!charactersInTheString.includes(character)) {
      charactersInTheString.push(character);
    }
  });
  // Update "occurances" array
  charactersInTheString.forEach((character) => {
    let count = 0;
    sArray.forEach((c) => {
      if (character == c) {
        count += 1;
      }
    });
    occurances.push(count);
  });
  // Update the "test" return variable
  for (let i = 1; i < occurances.length; i++) {
    let currentValue = occurances[0];
    if (occurances[i] != currentValue) {
      test = false;
    }
  }
  // return the test
  return test;
}
