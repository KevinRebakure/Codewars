// Question: https://www.codewars.com/kata/56a4a3d4043c316002000042/train/javascript

function validateTime(time) {
  if (time != '') {
    return /(([0-2][0-9])|([0-9])):[0-5][0-9]/gi.test(time);
  }
}

console.log(validateTime('01:12'))