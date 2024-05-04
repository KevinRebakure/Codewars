// Question: https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript

function getCount(str) {
  return str.split("").reduce((c, v) => {
    if (v.match(/[aieuo]/)) return c + 1;
    return c;
  }, 0);
}

console.log(getCount("aaa"));
