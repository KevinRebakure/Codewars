// Question: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  let n = Math.floor(str.length / 2);
  let text = str.split("");
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if ([text[i * 2], text[i * 2 + 1]].join("").length == 1) {
      arr.push([text[i * 2], "_"].join(""));
    } else {
      arr.push([text[i * 2], text[i * 2 + 1]].join(""));
    }
  }
  return arr.filter((el)=>{
    if (el != '') {
      return el
    }
  });
}

console.log(solution("abcdef"));