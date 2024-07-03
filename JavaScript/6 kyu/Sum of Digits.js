// Question: https://www.codewars.com/kata/541c8630095125aba6000c00/solutions/javascript

// let x = 493193;

function digitalRoot(n) {
  let y = Array.from(n.toString().split(""))
    .map((num) => parseInt(num))
    .reduce((t, num) => {
      return t + num;
    }, 0);
  return y.toString().length == 1 ? y : digitalRoot(y);
}

// console.log(digitalRoot(x))