// Question: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/typescript

function solution(str: string): string {
  const arr: string[] = str.split("");
  return arr.reverse().join("");
}

console.log(solution("kevin"));
