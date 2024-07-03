// Question: 

// 9119;
// 811181;

// let x = 9119;

function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((num) => parseInt(num) ** 2)
      .join("")
  );
}

// console.log(squareDigits(x));
