// Question: https://www.codewars.com/kata/5a9996fa8e503f2b4a002e7a

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function oddNotPrime(n) {
  let counter = 1;
  for (let j = 1; j <= n; j++) {
    if (j % 2 != 0 && !isPrime(j)) {
      counter++;
    }
  }
  return counter;
}