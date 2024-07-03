// Question: https://www.codewars.com/kata/65f361be2b30ec19b78d758f

// 1. Chris - summation of N
// 2. Tom - summation of half N
// 3. Cat - summation of Chris and Tom
// 4. Log - "Chris ate {number} flies, Tom ate {number} flies and Cat ate {number} flies"
// Ignored maximum n intake of 200

function frogContest(n) {
  let [chris, tom, cat] = [0, 0, 0];
  for (let i = 1; i <= n; i++) chris += i;
  for (let i = 1; i <= Math.floor(chris / 2); i++) tom += i;
  for (let i = 1; i <= tom + chris; i++) cat += i;
  return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`;
}

// function frogContest(n) {
//   let chris = (n / 2) * (1 + n);
//   let tom = (Math.floor(chris / 2) / 2) * (1 + Math.floor(chris / 2));
//   let Cat = ((tom + chris) / 2) * (1 + (tom + chris));
//   return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${Cat} flies`;
// }

// console.log(frogContest(5));
