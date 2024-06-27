// Question: https://www.codewars.com/kata/56a4a3d4043c316002000042/train/javascript

function validateTime(time) {
  const timeRegex = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(time);
}

console.log(validateTime("24:12"));
