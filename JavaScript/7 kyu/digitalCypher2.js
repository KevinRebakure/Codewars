// Question: https://www.codewars.com/kata/592edfda5be407b9640000b2

function decode(code, n) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const sequencedKey = code.map((_, index) =>
    parseInt(n.toString()[index % n.toString().length])
  );
  const extract = code.map((value, index) => value - sequencedKey[index]);
  let text = "";
  extract.forEach((num) => {
    text += alphabets[num - 1];
  });
  return text;
}

// function decode(code, n) {
//   if (!code.some((num) => num < 0) && typeof n == "number" && !(n < 0)) {
//     const alphabets = "abcdefghijklmnopqrstuvwxyz";
//     const sequencedKey = code.map((_, index) =>
//       parseInt(n.toString()[index % n.toString().length])
//     );
//     const extract = code.map((value, index) => value - sequencedKey[index]);
//     let text = "";
//     extract.forEach((num) => {
//       text += alphabets[num - 1];
//     });
//     return text;
//   } else {
//     return "Some weird ERROR!😒";
//   }
// }