// Question: https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

//   *
//  ***
// *****
//  ***
//   *

// You need to return a string that looks like a diamond
// shape when printed on the screen, using asterisk (*) characters.
// Trailing spaces should be removed, and every line must be terminated
//  with a newline character (\n).

// "  *\n ***\n*****\n ***\n  *\n";

// Return null/nil/None/... if the input is an even number or
//  negative, as it is not possible to print a diamond of even or negative size.

function diamond(n) {
  const upper = [];
  const lower = [];
  const finalUpper = [];
  const finalLower = [];

  let county = 0;
  let countx = 1;

  for (let i = n; i > 0; i -= 2) {
    upper.push(" ".repeat(county));
    upper.push("*".repeat(i));
    county++;
  }

  for (let i = n - 2; i > 0; i -= 2) {
    lower.push(" ".repeat(countx));
    lower.push("*".repeat(i));
    countx++;
  }

  for (let i = 0; i < upper.length; i += 2) {
    finalUpper.push(`${upper[i]}${upper[i + 1]}`);
  }
  for (let i = 0; i < lower.length; i += 2) {
    finalLower.push(`${lower[i]}${lower[i + 1]}`);
  }

  // const diamond = [...finalUpper.reverse(), ...finalLower].forEach((el) => {
  //   console.log(el);
  // });

  // return diamond;

  return [...finalUpper.reverse(), ...finalLower].join('\n')
}

// console.log(diamond(5));