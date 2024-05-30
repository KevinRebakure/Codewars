// let text = "hello";
// let text = "h2ll4";

function encode(string) {
  let vowels = "aeiou";
  return string
    .split("")
    .map((v) => {
      if (vowels.includes(v)) {
        return vowels.indexOf(v) + 1;
      } else {
        return v;
      }
    })
    .join("");
}

function decode(string) {
  let numbers = [1, 2, 3, 4, 5];
  let vowels = "aeiou";
  return string
    .split("")
    .map((v) => {
      if (numbers.includes(parseInt(v))) {
        return vowels[numbers.indexOf(parseInt(v))];
      } else {
        return v;
      }
    })
    .join("");
}

// console.log(encode(text));
// console.log(decode(text));
