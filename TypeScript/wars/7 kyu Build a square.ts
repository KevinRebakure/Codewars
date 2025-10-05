// Question: https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/typescript

function generateShape(int: number): string {
  let square: string[] = [];
  for (let i = 0; i < int; i++) {
    square.push("+".repeat(int));
  }
  return square.join("\n");
}

console.log(generateShape(5));
