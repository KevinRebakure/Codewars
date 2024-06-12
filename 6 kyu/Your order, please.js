// Question: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// let text = "is2 Thi1s T4est 3a";

function order(words) {
  if (words.length == 0) {
    return "";
  } else {
    return words
      .match(/\w+/gi)
      .map((word) => [word.match(/\d/g), word])
      .sort((a, b) => parseInt(a[0][0]) - parseInt(b[0][0]))
      .map((position) => position[1])
      .join(" ");
  }
}

// console.log(order(text));

// Another way

// function order(words) {
//   return words
//     .split(" ")
//     .sort(function (a, b) {
//       return a.match(/\d/) - b.match(/\d/);
//     })
//     .join(" ");
// }
