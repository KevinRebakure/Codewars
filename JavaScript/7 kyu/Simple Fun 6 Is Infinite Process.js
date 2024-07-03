// Question: https://www.codewars.com/kata/588431bb76933b84520000d3/train/javascript

function isInfiniteProcess(a, b) {
  if (a > b) {
    return true;
  }
  if ((b - a) % 2 !== 0) {
    return true;
  }
  return false;
}
