// Question: https://www.codewars.com/kata/5264d2b162488dc400000001/solutions/javascript

// let x = "Hey fellow warriors";
function spinWords(string) {
  return string
    .split(" ")
    .map((word) => word.split(""))
    .map((arr) => {
      if (arr.length > 4) {
        arr.reverse().join("");
      }
      return arr.join("");
    })
    .join(" ");
}

// console.log(spinWords(x));
