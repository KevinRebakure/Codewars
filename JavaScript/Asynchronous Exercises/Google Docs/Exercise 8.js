function multiply(a, b, callDisplay) {
  return callDisplay(a * b);
}

function display(result) {
  return result;
}

console.log(multiply(2, 3, display));