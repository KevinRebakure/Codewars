// Question: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// const text = " Hello there thanks for trying my Kata";
// const text = "    hello     world   " ;
const text = "";
function generateHashtag(str) {
  const arr = `#${str
    .split(" ")
    .filter((char) => {
      if (char != "") return char;
    })
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join("")}`;
    
  if (arr == "#") {
    return false;
  } else if (arr.length > 140) {
    return false;
  } else {
    return arr;
  }
}

console.log(generateHashtag(text));
