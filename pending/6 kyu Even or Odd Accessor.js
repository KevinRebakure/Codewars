// Question: https://www.codewars.com/kata/6656a4687f3e4eb5fb520817/train/javascript

// evenOrOdd(2); //'Even'
// evenOrOdd[2]; //'Even'
// evenOrOdd(7); //'Odd'
// evenOrOdd[7]; //'Odd'

function evenOrOdd(n) {
  if (typeof n === "number") {
    switch (n % 2) {
      case 0:
        return "Even";
      default:
        return "Odd";
    }
  } else if (typeof n == "object") {
    switch (n[0] % 2) {
      case 0:
        return "Even";
      default:
        return "Odd";
    }
  } else if (typeof n == "string") {
    switch (parseInt(n) % 2) {
      case 0:
        return "Even";
      default:
        return "Odd";
    }
  }
}

console.log(evenOrOdd(0));
