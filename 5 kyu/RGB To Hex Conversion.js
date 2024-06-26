// Question: https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b) {
  let _red = eligible(r).toString(16).padStart(2, "0").toUpperCase();
  let _green = eligible(g).toString(16).padStart(2, "0").toUpperCase();
  let _blue = eligible(b).toString(16).padStart(2, "0").toUpperCase();
  return `${_red}${_green}${_blue}`;
}

function eligible(num) {
  if (num < 0) {
    return 0;
  } else if (num > 255) {
    return 255;
  }
  return num;
}

console.log(rgb(123, 22, 132));
