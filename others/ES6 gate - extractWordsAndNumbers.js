// Write a function in JavaScript that takes an array of strings 
// combined with numbers as input and returns a new array containing
// the original string and the extracted numeric values from those strings.

const input = ["Hello123", "World456", "49", "Another789"];

function extractWordsAndNumbers(getInput) {
  return getInput.map((word) => {
    return [word.slice(0, word.indexOf(word.match(/\d/))), parseInt(word.slice(word.indexOf(word.match(/\d/))))]
  }).flat().filter((value)=>{if (value != '') return value})
}

console.log(extractWordsAndNumbers(input));