// Question: https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b) {
  const values = {
    red: undefined,
    green: undefined,
    blue: undefined,
  };

  if (r < 0) {
    values.red = 0;
  } else if (r > 255) {
    values.red = 255;
  } else {
    values.red = r;
  }

  if (g < 0) {
    values.green = 0;
  } else if (g > 255) {
    values.green = 255;
  } else {
    values.green = g;
  }

  if (b < 0) {
    values.blue = 0;
  } else if (b > 255) {
    values.blue = 255;
  } else {
    values.blue = b;
  }

  let _red = values.red.toString(16).padStart(2, "0").toUpperCase();
  let _green = values.green.toString(16).padStart(2, "0").toUpperCase();
  let _blue = values.blue.toString(16).padStart(2, "0").toUpperCase();
  return `${_red}${_green}${_blue}`;
}

console.log(rgb(123, 22, 132));
