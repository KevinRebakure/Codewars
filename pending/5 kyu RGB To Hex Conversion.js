// Question: https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b) {
  let red =
    r.toString(16).length === 1 ? `0${r.toString(16)}` : `${r.toString(16)}`;
  let green =
    g.toString(16).length === 1 ? `0${g.toString(16)}` : `${g.toString(16)}`;
  let blue =
    b.toString(16).length === 1 ? `0${b.toString(16)}` : `${b.toString(16)}`;
  return `${red}${green}${blue}`;
}

console.log(rgb(123, 22, 132));
