// Question: https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript

// If the string to search for is "me", and the array to search is
//  ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].

// on nothing returns "Empty"

let word = "me";
let arr = ["home", "milk", "Mercury", "fish"];
function wordSearch(query, seq) {
  let lowerQuery = query.toLowerCase();
  let lowerSeq = seq.toLowerCase();
  return lowerSeq.some((n) => n.includes(lowerQuery))
    ? lowerSeq.filter((word) => word.includes(lowerQuery))
    : ["Empty"];
}
console.log(wordSearch(word, arr));
