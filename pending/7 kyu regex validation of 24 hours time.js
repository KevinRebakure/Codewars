// Question: https://www.codewars.com/kata/56a4a3d4043c316002000042/train/javascript

function validateTime(time) {
  if (time != "") {
    return time == /(([0-2][0-4])|([0-1][0-9])|([0-9])):[0-5][0-9]/gi
      ? true
      : false;
  }
}

console.log(validateTime("24:12"));
